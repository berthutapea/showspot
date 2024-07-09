import React from 'react';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import ShowcaseProjectsPendingAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-pending-admin';
import ShowcaseProjectsConfirmedAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-confirmed-admin';
import ShowcaseProjectsRejectedAdmin from '../../../../../components/showcase/showcase-projects/showcase-projects-admin/showcase-projects-rejected-admin';

const ShowcaseProjects = () => {
  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Showcase Projects" />
      <ShowcaseProjectsPendingAdmin />
      <ShowcaseProjectsConfirmedAdmin />
      <ShowcaseProjectsRejectedAdmin />
    </LayoutAdmin>
  );
};

export default ShowcaseProjects;
