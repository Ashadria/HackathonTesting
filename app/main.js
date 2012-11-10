var DashboardSample  = DashboardSample || {};



/* Page 1 */
DashboardSample.InitialDashboard = M.PageView.design({

    childViews: 'header  content',

    events: {
        pageshow: {
            target: DashboardSample.ApplicationController,
            action: 'init'
        }
    },

    header: M.ToolbarView.design({
        value: 'Just in Case'
    }),

    content: M.ScrollView.design({
        childViews: 'dashboard',

//        background: M.ImageView.design({
//            value: 'theme/images/dashboardBackground.jpg',
//            cssClass: 'myBackground'
//        }),

        dashboard: M.DashboardView.design({

            events: {
                tap: {
                    target: DashboardSample.ApplicationController,
                    action: function(id) {
                        this.events.unshift({
                            label: (this.events.length + 1) + ') ' + M.ViewManager.getViewById(id).label + ' (global)'
                        });
                        this.set('events', this.events);
                    }
                }
            },
            itemsPerLine: 2,
            isEditable: NO,
            contentBinding: {
                target: DashboardSample.ApplicationController,
                property: 'items'
            }
        })
    })
});

DashboardSample.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'initial',

    initial: DashboardSample.InitialDashboard,
    familyDoctor: DashboardSample.FamilyDoctorPage,
    emergencyMedicine: DashboardSample.EmergencyMedicine,
    pediatrics: DashboardSample.Pediatrics,
    chiropractic: DashboardSample.Chiropractic,
    other: DashboardSample.Other
});