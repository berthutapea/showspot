import React from 'react';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import ShowcaseProjectsHistoryAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-history-admin';
import ShowcaseProjectsPendingAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-pending-admin';

const ShowcaseProjects = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Showcase Projects" />
      <ShowcaseProjectsPendingAdmin />
      <ShowcaseProjectsHistoryAdmin />
    </LayoutAdmin>
  );
};

export default ShowcaseProjects;
