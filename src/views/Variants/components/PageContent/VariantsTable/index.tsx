import { useEffect, useState } from 'react';
import intl from 'react-intl-universal';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ExternalLink from '@ferlab/ui/core/components/ExternalLink';
import ProTable from '@ferlab/ui/core/components/ProTable';
import { PaginationViewPerQuery } from '@ferlab/ui/core/components/ProTable/Pagination/constants';
import { ProColumnType } from '@ferlab/ui/core/components/ProTable/types';
import { addQuery } from '@ferlab/ui/core/components/QueryBuilder/utils/useQueryBuilderState';
import { useFilters } from '@ferlab/ui/core/data/filters/utils';
import { ISqonGroupFilter, ISyntheticSqon } from '@ferlab/ui/core/data/sqon/types';
import { generateQuery, generateValueFilter } from '@ferlab/ui/core/data/sqon/utils';
import {
  IArrangerResultsTree,
  IQueryConfig,
  IQueryResults,
  TQueryConfigCb,
} from '@ferlab/ui/core/graphql/types';
import { toExponentialNotation } from '@ferlab/ui/core/utils/numberUtils';
import { removeUnderscoreAndCapitalize } from '@ferlab/ui/core/utils/stringUtils';
import GridCard from '@ferlab/ui/core/view/v2/GridCard';
import { Tooltip } from 'antd';
import cx from 'classnames';
import { INDEXES } from 'graphql/constants';
import {
  IClinVar,
  IConsequenceEntity,
  IExternalFrequenciesEntity,
  ITableVariantEntity,
  IVariantEntity,
  IVariantStudyEntity,
} from 'graphql/variants/models';
import SetsManagementDropdown from 'views/DataExploration/components/SetsManagementDropdown';
import { DATA_EXPLORATION_QB_ID, DEFAULT_PAGE_INDEX } from 'views/DataExploration/utils/constant';
import ConsequencesCell from 'views/Variants/components/ConsequencesCell';
import { SCROLL_WRAPPER_ID, VARIANT_SAVED_SETS_FIELD } from 'views/Variants/utils/constants';

import { TABLE_EMPTY_PLACE_HOLDER } from 'common/constants';
import { SetType } from 'services/api/savedSet/models';
import { useUser } from 'store/user';
import { updateUserConfig } from 'store/user/thunks';
import { formatQuerySortList, scrollToTop } from 'utils/helper';
import { STATIC_ROUTES } from 'utils/routes';
import { truncateString } from 'utils/string';
import { getProTableDictionary } from 'utils/translation';

import styles from './index.module.scss';

interface OwnProps {
  pageIndex: number;
  sqon?: ISqonGroupFilter;
  setPageIndex: (value: number) => void;
  results: IQueryResults<IVariantEntity[]>;
  setQueryConfig: TQueryConfigCb;
  queryConfig: IQueryConfig;
}

const isNumber = (n: number) => n && !Number.isNaN(n);

const defaultColumns: ProColumnType[] = [
  {
    title: intl.get('screen.variants.table.variant'),
    key: 'hgvsg',
    dataIndex: 'hgvsg',
    className: cx(styles.variantTableCell, styles.variantTableCellElipsis),
    sorter: {
      multiple: 1,
    },
  },
  {
    key: 'variant_class',
    title: 'Type',
    dataIndex: 'variant_class',
    sorter: {
      multiple: 1,
    },
  },
  {
    key: 'rsnumber',
    title: intl.get('screen.variants.table.dbsnp'),
    dataIndex: 'rsnumber',
    className: styles.dbSnpTableCell,
    sorter: {
      multiple: 1,
    },
    render: (rsNumber: string) =>
      rsNumber ? (
        <ExternalLink href={`https://www.ncbi.nlm.nih.gov/snp/${rsNumber}`}>
          {rsNumber}
        </ExternalLink>
      ) : (
        TABLE_EMPTY_PLACE_HOLDER
      ),
  },
  {
    key: 'consequences',
    title: intl.get('screen.variants.table.consequences.title'),
    dataIndex: 'consequences',
    tooltip: intl.get('screen.variants.table.consequences.tooltip'),
    render: (consequences: IArrangerResultsTree<IConsequenceEntity>) => (
      <ConsequencesCell consequences={consequences?.hits?.edges || []} />
    ),
  },
  {
    key: 'clinvar',
    title: intl.get('screen.variants.table.clinvar'),
    dataIndex: 'clinvar',
    className: cx(styles.variantTableCell, styles.variantTableCellElipsis),
    render: (clinVar: IClinVar) =>
      clinVar?.clin_sig && clinVar.clinvar_id ? (
        <Tooltip
          placement="topLeft"
          title={removeUnderscoreAndCapitalize(clinVar.clin_sig.join(', '))}
        >
          <ExternalLink
            href={`https://www.ncbi.nlm.nih.gov/clinvar/variation/${clinVar.clinvar_id}`}
          >
            {truncateString(removeUnderscoreAndCapitalize(clinVar.clin_sig.join(', ')), 29)}
          </ExternalLink>
        </Tooltip>
      ) : (
        TABLE_EMPTY_PLACE_HOLDER
      ),
  },
  {
    key: 'gnomad_genomes_3_1_1.af',
    title: intl.get('screen.variants.table.gnomAD.title'),
    tooltip: intl.get('screen.variants.table.gnomAD.tooltip'),
    dataIndex: 'frequencies',
    render: (gnomad: IExternalFrequenciesEntity) =>
      gnomad.gnomad_genomes_3_1_1.af
        ? toExponentialNotation(gnomad.gnomad_genomes_3_1_1.af)
        : TABLE_EMPTY_PLACE_HOLDER,
  },
  {
    title: 'Studies',
    dataIndex: 'studies',
    key: 'studies',
    render: (studies: IArrangerResultsTree<IVariantStudyEntity>) => studies?.hits?.total || 0,
  },
  {
    title: intl.get('screen.variants.table.participant.title'),
    tooltip: intl.get('screen.variants.table.participant.tooltip'),
    key: 'participant_number',
    render: (record: IVariantEntity) => {
      const participantNumber = record.participant_number || 0;
      if (participantNumber <= 10) {
        return participantNumber;
      }

      const participantIds = record.studies?.hits?.edges?.flatMap(
        (study) => study.node.participant_ids,
      );

      return (
        <Link
          to={STATIC_ROUTES.DATA_EXPLORATION_PARTICIPANTS}
          onClick={() => {
            addQuery({
              queryBuilderId: DATA_EXPLORATION_QB_ID,
              query: generateQuery({
                newFilters: [
                  generateValueFilter({
                    field: 'participant_id',
                    value: participantIds,
                    index: INDEXES.PARTICIPANT,
                  }),
                ],
              }),
              setAsActive: true,
            });
          }}
        >
          {participantNumber}
        </Link>
      );
    },
  },
  {
    title: intl.get('screen.variants.table.frequence.title'),
    tooltip: intl.get('screen.variants.table.frequence.tooltip'),
    dataIndex: 'participant_frequency',
    key: 'participant_frequency',
    sorter: {
      multiple: 1,
    },
    render: (participantFrequency: number) =>
      isNumber(participantFrequency)
        ? toExponentialNotation(participantFrequency)
        : TABLE_EMPTY_PLACE_HOLDER,
  },
  {
    title: intl.get('screen.variants.table.alt.title'),
    tooltip: intl.get('screen.variants.table.alt.tooltip'),
    dataIndex: 'frequencies',
    key: 'alternate',
    render: (frequencies: IExternalFrequenciesEntity) => frequencies?.internal?.upper_bound_kf?.ac,
  },
  {
    title: intl.get('screen.variants.table.homozygotes.title'),
    tooltip: intl.get('screen.variants.table.homozygotes.tooltip'),
    dataIndex: 'frequencies',
    key: 'homozygotes',
    render: (frequencies: IExternalFrequenciesEntity) =>
      frequencies?.internal?.upper_bound_kf?.homozygotes,
  },
];

const VariantsTable = ({
  results,
  sqon,
  setQueryConfig,
  queryConfig,
  pageIndex,
  setPageIndex,
}: OwnProps) => {
  const dispatch = useDispatch();
  const { filters }: { filters: ISyntheticSqon } = useFilters();
  const { userInfo } = useUser();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<IVariantEntity[]>([]);
  const [selectedAllResults, setSelectedAllResults] = useState(false);

  const getCurrentSqon = (): any =>
    selectedAllResults || !selectedKeys.length
      ? sqon
      : generateQuery({
          newFilters: [
            generateValueFilter({
              field: 'locus',
              index: INDEXES.VARIANTS,
              value: selectedRows.map((row) => row.locus),
            }),
          ],
        });

  useEffect(() => {
    if (selectedKeys.length) {
      setSelectedKeys([]);
      setSelectedRows([]);
    }
    // eslint-disable-next-line
  }, [JSON.stringify(filters)]);

  return (
    <GridCard
      content={
        <ProTable<ITableVariantEntity>
          tableId="variants_table"
          columns={defaultColumns}
          enableRowSelection
          initialColumnState={userInfo?.config.variant?.tables?.variants?.columns}
          wrapperClassName={styles.variantTabWrapper}
          loading={results.loading}
          initialSelectedKey={selectedKeys}
          showSorterTooltip={false}
          onChange={({ current }, _, sorter) => {
            setPageIndex(DEFAULT_PAGE_INDEX);
            setQueryConfig({
              pageIndex: DEFAULT_PAGE_INDEX,
              size: queryConfig.size!,
              sort: formatQuerySortList(sorter),
            });
          }}
          headerConfig={{
            itemCount: {
              pageIndex: pageIndex,
              pageSize: queryConfig.size,
              total: results.total,
            },
            enableColumnSort: true,
            onColumnSortChange: (newState) =>
              dispatch(
                updateUserConfig({
                  variant: {
                    tables: {
                      variants: {
                        columns: newState,
                      },
                    },
                  },
                }),
              ),
            onSelectAllResultsChange: setSelectedAllResults,
            onSelectedRowsChange: (keys, selectedRows) => {
              setSelectedKeys(keys);
              setSelectedRows(selectedRows);
            },
            extra: [
              <SetsManagementDropdown
                idField={VARIANT_SAVED_SETS_FIELD}
                results={results}
                selectedKeys={selectedKeys}
                selectedAllResults={selectedAllResults}
                sqon={getCurrentSqon()}
                type={SetType.VARIANT}
                key="variants-set-management"
              />,
            ],
          }}
          bordered
          size="small"
          pagination={{
            current: pageIndex,
            queryConfig,
            setQueryConfig,
            onChange: (page: number) => {
              scrollToTop(SCROLL_WRAPPER_ID);
              setPageIndex(page);
            },
            searchAfter: results.searchAfter,
            onViewQueryChange: (viewPerQuery: PaginationViewPerQuery) => {
              dispatch(
                updateUserConfig({
                  variant: {
                    tables: {
                      variants: {
                        ...userInfo?.config.variant?.tables?.variants,
                        viewPerQuery,
                      },
                    },
                  },
                }),
              );
            },
            defaultViewPerQuery: queryConfig.size,
          }}
          dataSource={results.data.map((i) => ({ ...i, key: i.id }))}
          dictionary={getProTableDictionary()}
        />
      }
    />
  );
};

export default VariantsTable;
