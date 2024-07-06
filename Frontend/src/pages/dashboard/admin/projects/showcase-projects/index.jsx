import React from 'react';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import ShowcaseProjectsLatestAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-latest-admin';
import ShowcaseProjectsHistoryAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-history-admin';

const ShowcaseProjects = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Showcase Projects" />
      <ShowcaseProjectsLatestAdmin />
      <ShowcaseProjectsHistoryAdmin />
    </LayoutAdmin>
  );
};

export default ShowcaseProjects;
