import { ProColumnType } from '@ferlab/ui/core/components/ProTable/types';
import { useStudies } from 'graphql/studies/actions';
import { Link } from 'react-router-dom';
import { STATIC_ROUTES } from 'utils/routes';
import { IStudyEntity } from 'graphql/studies/models';
import { generateQuery, generateValueFilter } from '@ferlab/ui/core/data/sqon/utils';
import { INDEXES } from 'graphql/constants';
import { CheckOutlined, UserOutlined } from '@ant-design/icons';
import ExternalLink from '@ferlab/ui/core/components/ExternalLink';
import { addQuery } from '@ferlab/ui/core/components/QueryBuilder/utils/useQueryBuilderState';
import { DATA_EXPLORATION_QB_ID } from 'views/DataExploration/utils/constant';

import styles from './index.module.scss';
import SideBarFacet from './components/SideBarFacet';
import useGetExtendedMappings from 'hooks/graphql/useGetExtendedMappings';
import { FilterInfo } from 'components/uiKit/FilterList/types';
import ScrollContent from '@ferlab/ui/core/layout/ScrollContent';
import { SCROLL_WRAPPER_ID } from './utils/constant';
import PageContent from './PageContent';

const enum DataCategory {
  METABOLOMIC = 'Metabolomic',
  GENOMIC = 'Genomic',
  PROTEOMIC = 'Proteomic',
  TRANSCRIPTOMIC = 'Transcriptomic',
  CLINICAL = 'Clinical',
  IMMUNE_MAP = 'Immune-Map',
}

const hasDataCategory = (dataCategory: string[], category: DataCategory) =>
  dataCategory ? dataCategory.includes(category) ? <CheckOutlined /> : undefined : undefined;

const filterInfo: FilterInfo = {
  groups: [
    {
      facets: [
        'external_id',
        'domain',
        'program',
        'data_category',
        'experimental_strategy',
        'family_data',
      ],
    },
  ],
};

const columns: ProColumnType<any>[] = [
  {
    key: 'study_id',
    title: 'Study Code',
    render: (record: IStudyEntity) => (
      <ExternalLink href={record.website}>{record.study_id}</ExternalLink>
    ),
  },
  {
    key: 'study_name',
    title: 'Name',
    dataIndex: 'study_name',
    width: 500,
  },
  {
    key: 'program',
    title: 'Program',
    dataIndex: 'program',
  },
  {
    key: 'external_id',
    title: 'dbGaP',
    dataIndex: 'external_id',
    render: (external_id: string) => (
      <ExternalLink
        href={`https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=${external_id}`}
      >
        {external_id}
      </ExternalLink>
    ),
  },
  {
    key: 'participant_count',
    title: 'Participants',
    render: (record: IStudyEntity) => {
      const participantCount = record.participant_count;

      return participantCount ? (
        <Link
          to={STATIC_ROUTES.DATA_EXPLORATION_PARTICIPANTS}
          onClick={() =>
            addQuery({
              queryBuilderId: DATA_EXPLORATION_QB_ID,
              query: generateQuery({
                newFilters: [
                  generateValueFilter({
                    field: 'study_id',
                    value: [record.study_id],
                    index: INDEXES.PARTICIPANT,
                  }),
                ],
              }),
              setAsActive: true,
            })
          }
        >
          {participantCount}
        </Link>
      ) : (
        participantCount || 0
      );
    },
  },
  {
    key: 'family_count',
    title: 'Families',
    dataIndex: 'family_count',
  },
  {
    key: 'biospecimen_count',
    title: 'Biospecimens',
    render: (record: IStudyEntity) => {
      const biospecimenCount = record.biospecimen_count;

      return biospecimenCount ? (
        <Link
          to={STATIC_ROUTES.DATA_EXPLORATION_BIOSPECIMENS}
          onClick={() =>
            addQuery({
              queryBuilderId: DATA_EXPLORATION_QB_ID,
              query: generateQuery({
                newFilters: [
                  generateValueFilter({
                    field: 'study_id',
                    value: [record.study_id],
                    index: INDEXES.PARTICIPANT,
                  }),
                ],
              }),
              setAsActive: true,
            })
          }
        >
          {biospecimenCount}
        </Link>
      ) : (
        biospecimenCount || 0
      );
    },
  },
  {
    key: 'genomic',
    title: DataCategory.GENOMIC,
    align: 'center',
    render: (record: IStudyEntity) => hasDataCategory(record.data_category, DataCategory.GENOMIC),
  },
  {
    key: 'transcriptomic',
    title: DataCategory.TRANSCRIPTOMIC,
    align: 'center',
    render: (record: IStudyEntity) =>
      hasDataCategory(record.data_category, DataCategory.TRANSCRIPTOMIC),
  },
  {
    key: 'proteomic',
    title: 'Proteomic',
    align: 'center',
    render: (record: IStudyEntity) => hasDataCategory(record.data_category, DataCategory.PROTEOMIC),
  },
  {
    key: 'immune_map',
    title: 'Immune Map',
    align: 'center',
    render: (record: IStudyEntity) =>
      hasDataCategory(record.data_category, DataCategory.IMMUNE_MAP),
  },
  {
    key: 'metabolic',
    title: 'Metabolomic',
    align: 'center',
    render: (record: IStudyEntity) =>
      hasDataCategory(record.data_category, DataCategory.METABOLOMIC),
  },
];

const Studies = () => {
  const studiesMappingResults = useGetExtendedMappings(INDEXES.STUDY);

  return (
    <div className={styles.studiesPage}>
      <SideBarFacet extendedMappingResults={studiesMappingResults} filterInfo={filterInfo} />
      <ScrollContent id={SCROLL_WRAPPER_ID} className={styles.scrollContent}>
        <PageContent defaultColumns={columns} />
      </ScrollContent>
    </div>
  );
};

export default Studies;
