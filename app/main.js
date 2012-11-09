// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso
//
// Project: DashboardSample
// ==========================================================================

var DashboardSample  = DashboardSample || {};

/* Page 1 */
DashboardSample.InitialDashboard = M.PageView.design({


    childViews: 'header content',

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


DashboardSample.FamilyDoctor = M.PageView.design({
    childViews: 'header',
    header: M.ToolbarView.design({
        value: 'Family Doctor locations',
        showBackButton: YES
    })
});

/* main.js */

DashboardSample.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'initial',

    initial: DashboardSample.InitialDashboard,
    familyDoctor: DashboardSample.FamilyDoctor

});