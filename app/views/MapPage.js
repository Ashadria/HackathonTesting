DashboardSample.MapPage = M.PageView.design({

	events: {
        pageshow: {
            target: DashboardSample.MapController,
            action: 'init'
        }
    },

        childViews: 'header map',

        header: M.ToolbarView.design({
            value: 'Requested Location',
            showBackButton: YES
        }),

        map: M.MapView.design({

        	cssClass: 'map',
            isInset: YES,
            showMapTypeControl: YES,
            showStreetViewControl: NO,
            showNavigationControl: YES,
            mapType: M.MAP_ROADMAP,
            zoomLevel: 10,
            isDraggable: YES,

            initialLocation: M.Location.extend({
                latitude: 39.073791,
                longitude: -95.471191
            }),
            callbacks: {
                error: {
                    target: DashboardSample.MapController,
                    action: 'connectionError'
                }
            },

            contentBinding: {
                target: DashboardSample.MapController,
                property: 'markers'
            }

        })
    });