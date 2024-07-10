import React from 'react';
import LayoutMentors from '../../../../../layout/layout-mentors';
import BreadcrumbMentors from '../../../../../components/breadcrumb/breadcrumb-mentors';
import ShowcaseProjectsPendingMentors from '../../../../../components/showcase/showcase-projects/showcase-projects-mentors/showcase-projects-pending-mentors';
import ShowcaseProjectsConfirmedMentors from '../../../../../components/showcase/showcase-projects/showcase-projects-mentors/showcase-projects-confirmed-mentors';
import ShowcaseProjectsRejectedMentors from '../../../../../components/showcase/showcase-projects/showcase-projects-mentors/showcase-projects-rejected-mentors';

const ShowcaseProjects = () => {
  return (
    <LayoutMentors>
      <BreadcrumbMentors pageName="Showcase Projects" />
      <ShowcaseProjectsPendingMentors />
      <ShowcaseProjectsConfirmedMentors />
      <ShowcaseProjectsRejectedMentors />
    </LayoutMentors>
  );
};

export default ShowcaseProjects;
