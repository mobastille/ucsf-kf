import React from 'react';
import MultiLabel from '@ferlab/ui/core/components/labels/MultiLabel';
import StackLayout from '@ferlab/ui/core/layout/StackLayout';
import { Spin } from 'antd';

import OccurencesIcon from 'icons/OccurencesIcon';
import ParticipantIcon from 'icons/ParticipantIcon';
import StudyIcon from 'icons/StudyIcon';
import VariantIcon from 'icons/VariantIcon';
import { VariantStatsResults } from 'store/graphql/variants/models';
import { useStatVariants } from 'store/graphql/variants/statsActions';

import style from './VariantsSearchPage.module.scss';

const formatCounts = (num: number) => (num || 0).toLocaleString();
const iconSize = { height: 30, width: 30 };

const VariantStatsContainer = () => {
  let result: VariantStatsResults = useStatVariants();

  return (
    <Spin spinning={result.loading}>
      <StackLayout className={style.variantStatsContainer}>
        <MultiLabel
          label={formatCounts(result?.stats?.studiesCount)}
          Icon={<StudyIcon className={style.variantPageIconColor} {...iconSize} />}
          subLabel={'Studies'}
        />
        <MultiLabel
          label={formatCounts(result?.stats?.participantsCount)}
          Icon={<ParticipantIcon className={style.variantPageIconColor} {...iconSize} />}
          subLabel={'Participants'}
        />
        <MultiLabel
          label={formatCounts(result?.stats?.distinctVariantsCount)}
          Icon={<VariantIcon className={style.variantPageIconColor} {...iconSize} />}
          subLabel={'Unique Variants'}
        />
        <MultiLabel
          label={formatCounts(result?.stats?.occurrencesCount)}
          Icon={<OccurencesIcon className={style.variantPageIconColor} {...iconSize} />}
          subLabel={'Occurences'}
        />
      </StackLayout>
    </Spin>
  );
};

export default VariantStatsContainer;
