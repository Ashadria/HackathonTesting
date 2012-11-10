m_require('app/views/FamilyDoctorPageTemplate.js');
DashboardSample.FamilyDoctorPage = M.PageView.design({

	childViews: 'header content',

	events: {
        pageshow: {
            target: DashboardSample.FamilyDoctorController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    }),

    content: M.PaginationView.design({

    	listItemTemplateView: DashboardSample.FamilyDoctorListTemplate,
    	contentBinding: {
            target: DashboardSample.FamilyDoctorController,
            property: 'list'
        },
        itemsPerPage: 10,
        idName: 'objectID'
    })
});