import React from 'react';
import { ArrowRightOutlined, FileFilled } from '@ant-design/icons';
import { notification, Spin } from 'antd';
import capitalize from 'lodash/capitalize';
import get from 'lodash/get';

import { CARDINALITY_PRECISION_THRESHOLD } from 'common/constants';
import DemographicIcon from 'icons/DemographicIcon';
import FamilyMembersIcon from 'icons/FamilyMembersIcon';
import graphql from 'services/arranger';
import { Sqon } from 'store/sqon';
import { User } from 'store/userTypes';
import colors from 'style/themes/default/_colors.scss';
import ButtonWithRouter from 'ui/Buttons/ButtonWithRouter';
import { roundIntToChosenPowerOfTen } from 'utils';

import useUser from '../../../../hooks/useUser';
import DownloadButton from '../../ParticipantsTableView/DownloadButton';
import ParticipantSetDropdown from '../../ParticipantsTableView/ParticipantSetDropdown';
import { createFileRepoLink } from '../../util';

import './Toolbar.scss';

enum ToolbarLabels {
  participant,
  family,
  file,
}

type saveSetType = {
  type: string;
  path: string;
  userId: string;
  sqon: any;
  api: any;
  sort: any;
};
const saveSet = ({ type, path, userId, sqon = {}, api, sort = [] }: saveSetType) =>
  (api || graphql)({
    query: `
      mutation saveSet($type: ProjectType! $userId: String $sqon: JSON! $path: String!, $sort: [Sort]) 
      {
        saveSet(type: $type, userId: $userId, sqon: $sqon, path: $path, sort: $sort) {
          setId
          createdAt
          path
          size
          sqon
          type
          userId
        }
      }
    `,
    variables: { sqon, type, userId, path, sort },
  });

const LABELS = {
  [ToolbarLabels.participant]: {
    singular: 'participant',
    plural: 'participants',
    icon: <DemographicIcon width="19px" height="18px" fill={colors.headingColor} />,
  },
  [ToolbarLabels.family]: {
    singular: 'family',
    plural: 'families',
    icon: <FamilyMembersIcon width="18px" height="16px" fill={colors.headingColor} />,
  },
  [ToolbarLabels.file]: {
    singular: 'file',
    plural: 'files',
    icon: <FileFilled />,
  },
};

const showErrorNotification = () =>
  notification.error({
    message: 'Error',
    description: 'Unable to create a link to access file repository',
  });

type generateAllFilesLinkFn = (user: any, api: any, originalSqon: any) => Promise<string>;

const generateAllFilesLink: generateAllFilesLinkFn = async (
  user: User,
  api: Function,
  originalSqon: Sqon,
) => {
  let fileSet = null;
  try {
    fileSet = await saveSet({
      sort: [],
      type: 'participant',
      sqon: originalSqon || {},
      userId: user.egoId,
      path: 'kf_id111',
      // @ts-ignore
      api: graphql(api),
    });
  } catch (e) {
    showErrorNotification();
  }
  const setId = get(fileSet, 'data.saveSet.setId');

  return createFileRepoLink({
    op: 'and',
    content: [
      {
        op: 'in',
        content: {
          field: 'participants.kf_id',
          value: `set_id:${setId}`,
        },
      },
    ],
  });
};

const formatLabel = (cardinality: number, labelKey: ToolbarLabels) => {
  const hasMany = cardinality > 1;
  return hasMany ? capitalize(LABELS[labelKey].plural) : capitalize(LABELS[labelKey].singular);
};

const formatCount = (cardinality: number, isApproximation: boolean = false) =>
  isApproximation ? `\u2248 ${roundIntToChosenPowerOfTen(cardinality)}` : `${cardinality}`;

const formatCountResult = (cardinality: number, labelKey: ToolbarLabels) =>
  cardinality === 0
    ? 'No'
    : formatCount(
        cardinality,
        cardinality >= CARDINALITY_PRECISION_THRESHOLD && labelKey !== ToolbarLabels.participant,
      );

const ToolbarLabel = ({ count, label }: { count: number; label: ToolbarLabels }) => {
  const suffix = formatLabel(count, label);
  const prefix = formatCountResult(count, label);
  return (
    <div
      className={`cb-toolbar-item cb-toolbar-link-number ${count === 0 && 'cb-toolbar-no-results'}`}
    >
      {LABELS[label].icon}
      <div>
        {prefix} <span>{suffix}</span>
      </div>
    </div>
  );
};

const ToolbarFile = ({ count }: { count: number }) => {
  const label = formatLabel(count, ToolbarLabels.file);
  const prefix = formatCountResult(count, ToolbarLabels.file);
  return (
    <div
      className={`cb-toolbar-item cb-toolbar-item-files ${count === 0 && 'cb-toolbar-no-results'}`}
    >
      {LABELS[ToolbarLabels.file].icon}{' '}
      <div>
        {prefix} <span>{label}</span>
        <ArrowRightOutlined />
        &nbsp;
      </div>
    </div>
  );
};

const showDetailsHeader = (isFiltered: boolean, activeSqonIndex: number) => (
  <div className="cb-toolbar-details-header">
    {!isFiltered ? <h2>All Data</h2> : <h2>Query #{activeSqonIndex + 1}</h2>}
  </div>
);

type ToolbarProps = {
  isLoading: boolean;
  data: object[];
  isFiltered: boolean;
  participantCount: number;
  activeSqonIndex: number;
  api: object;
  sqon: Sqon;
};

const Toolbar = ({
  isLoading,
  data,
  isFiltered,
  participantCount,
  activeSqonIndex,
  api,
  sqon,
}: ToolbarProps) => {
  const { user } = useUser();
  const familiesCount = get(data, 'familiesCountCardinality', null);
  const filesCount = get(data, 'filesCardinality', 0) as number;
  return (
    <div className="cb-toolbar-container">
      {showDetailsHeader(isFiltered, activeSqonIndex)}
      {isLoading ? (
        <div className={'cb-toolbar-is-loading'}>
          <Spin size="small" />
        </div>
      ) : (
        <div className="cb-toolbar-info">
          <ToolbarLabel count={participantCount} label={ToolbarLabels.participant} />
          <ToolbarLabel count={familiesCount} label={ToolbarLabels.family} />
          {filesCount === 0 ? (
            <ToolbarLabel count={0} label={ToolbarLabels.file} />
          ) : (
            <ButtonWithRouter
              type="link"
              getLink={
                isFiltered
                  ? () => generateAllFilesLink(user, api, sqon)
                  : () => Promise.resolve('/search/file')
              }
            >
              <ToolbarFile count={filesCount} />
            </ButtonWithRouter>
          )}
        </div>
      )}
      <ParticipantSetDropdown user={user} sqon={sqon} participantCount={participantCount} />
      <DownloadButton sqon={sqon} />
    </div>
  );
};

export default Toolbar;
