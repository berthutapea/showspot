import React from 'react';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import ShowcaseProjectsPendingAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-pending-admin';
import ShowcaseProjectsConfirmedAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-confirmed-admin';

const ShowcaseProjects = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Showcase Projects" />
      <ShowcaseProjectsPendingAdmin />
      <ShowcaseProjectsConfirmedAdmin />
    </LayoutAdmin>
  );
};

export default ShowcaseProjects;
