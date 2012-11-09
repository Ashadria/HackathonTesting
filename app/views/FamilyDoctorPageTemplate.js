DashboardSample.FamilyListTemplate = M.ListItemView.design({

	childViews: 'name',

	events: {
        tap: {
            target: DashboardSample.ApplicationController,
            action:'listObjectClicked'
        }
    },

    name: M.LabelView.design({
        valuePattern: '<%= name %>'
    })
});