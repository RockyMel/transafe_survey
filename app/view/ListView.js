/*
 * File: app/view/ListView.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ListView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.ListView',

    requires: [
        'MyApp.view.RibbonMenuPanel',
        'Ext.Map',
        'Ext.navigation.Bar',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.IndexBar'
    ],

    config: {
        id: 'ListView',
        style: 'background-color: #FFF',
        scrollable: true,
        layout: {
            type: 'card',
            animation: 'flip'
        },
        items: [
            {
                xtype: 'container',
                docked: 'top',
                maxHeight: '50%',
                items: [
                    {
                        xtype: 'RibbonMenuPanel',
                        id: 'listViewRibbon'
                    },
                    {
                        xtype: 'map',
                        docked: 'bottom',
                        height: 200,
                        id: 'mapFromList',
                        mapOptions: {
                            zoom: 19
                        },
                        useCurrentLocation: true
                    }
                ]
            },
            {
                xtype: 'list',
                title: 'Choose where you are',
                itemId: 'mylist',
                hideOnMaskTap: false,
                allowDeselect: true,
                itemTpl: [
                    '<div>{name}</div>'
                ],
                store: 'FoursquareStore',
                grouped: true,
                itemHeight: 5,
                variableHeights: true,
                indexBar: {
                    hidden: false
                }
            }
        ],
        navigationBar: {
            docked: 'top'
        }
    },

    initialize: function() {
        this.callParent(arguments);
        // !!! sometimes lt and lng ==0. This thing might cause an infinite loop
        // while(lt === 0 || lng === 0){
        //     console.log('coors:' + lt+','+lng);
        //     window.location.reload();
        // }
        var FoursquareStore = Ext.getStore("FoursquareStore");
        FoursquareStore.load();

        var gMap1 = Ext.getCmp('mapFromList');
                //add traffic layer
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(gMap1.getMap());
                           // drop map marker
        var mymarker = new google.maps.Marker({
            map: gMap1.getMap(),
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(lt,lng),
            title: "You are here"
            //icon: 'transafe_logo.png'
        });
    }

});