import * as React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { withRouter } from 'react-router-dom';
import { injectState } from 'freactal';
import { withTheme } from 'emotion-theming';
import { Helmet } from 'react-helmet';
import styled from 'react-emotion';

import { ROLES } from 'common/constants';
import MySavedQueries from './MySavedQueries';
import Notifications from './Notifications';
import Integrations from './Integrations';
import ProfileInfoBar from './ProfileInfoBar';
import Column from 'uikit/Column';
import {
  PromptMessageContainer,
  PromptMessageHeading,
  PromptMessageContent,
} from 'uikit/PromptMessage';
import ExternalLink from 'uikit/ExternalLink';
import { H1, H2 } from '../../uikit/Headings';
import { Paragraph } from '../../uikit/Core';

const UserDashboard = styled('div')`
  ${({ theme }) => theme.row};
  min-height: 600px;
`;

export default compose(
  injectState,
  withRouter,
  withTheme,
  branch(({ state: { loggedInUser } }) => !loggedInUser, renderComponent(() => <div />)),
)(({ state: { loggedInUser, integrationTokens, percentageFilled }, theme, api }) => {
  const profileColors = ROLES.reduce(
    (prev, curr) => (curr.type === loggedInUser.roles[0] ? curr.profileColors : prev),
    ROLES[0].profileColors,
  );

  return (
    <UserDashboard>
      <Helmet>
        <title>Portal - User Dashboard</title>
      </Helmet>

      <ProfileInfoBar
        theme={theme}
        percentageFilled={percentageFilled}
        loggedInUser={loggedInUser}
        profileColors={profileColors}
      />
      <div
        css={`
          ${theme.column};
          flex-grow: 1;
          padding: 40px;
        `}
      >
        <H1 mb={'35px' /* On removing Beta Message change to 44px */}>
          Welcome, {loggedInUser.firstName}!
        </H1>
        <Column>
          <PromptMessageContainer info my={20}>
            <PromptMessageHeading info mb={10} color={theme.secondary}>
              The Portal is currently in <H2 display="inline-block">BETA Phase</H2>
            </PromptMessageHeading>
            <PromptMessageContent>
              <Paragraph>
                We are actively working on improvements, so you might find that your data has
                changed, such as your saved queries. Data in the repository will change regularly,
                such as field names or the amount of data available. We appreciate your usage and
                feedback during this phase, so please keep visiting and if you have any questions
                contact us at:{' '}
                <ExternalLink hasExternalIcon={false} href="mailto:support@kidsfirstdrc.org">
                  <strong>support@kidsfirstdrc.org</strong>
                </ExternalLink>.
              </Paragraph>
            </PromptMessageContent>
          </PromptMessageContainer>
          <div
            css={`
              display: flex;
              overflow: hidden;
            `}
          >
            <MySavedQueries {...{ api, loggedInUser, theme, profileColors }} />
            <Notifications />
          </div>
        </Column>
        <div
          css={`
            margin-top: auto;
          `}
        >
          <Integrations
            integrationTokens={integrationTokens}
            theme={theme}
            loggedInUser={loggedInUser}
          />
        </div>
      </div>
    </UserDashboard>
  );
});
