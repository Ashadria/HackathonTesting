m_require('app/views/FamilyDoctorPageTemplate.js');

DashboardSample.FamilyDoctor = M.PageView.design({

	childViews: 'header content',

    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    }),

    content: M.ListItemView.design({

    	listItemTemplateView: DashboardSample.FamilyListTemplate,

    	contentBinding: {
            target: DashboardSample.ApplicationController,
            property: 'listObject'
        },

        idName: 'name'
    })
});