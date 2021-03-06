/*
 * File: app/view/RibbonMenuPanel.js
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

Ext.define('MyApp.view.RibbonMenuPanel', {
    extend: 'Ext.Container',
    alias: 'widget.RibbonMenuPanel',

    requires: [
        'Ext.Label',
        'Ext.Img',
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        height: 97,
        style: 'background-color:#006db9',
        layout: {
            type: 'hbox',
            align: 'start'
        },
        items: [
            {
                xtype: 'label',
                docked: 'bottom',
                html: 'Welcome',
                id: 'welcomeRibbonLabel',
                margin: '0 0 0 10',
                style: 'color: white'
            },
            {
                xtype: 'image',
                height: 75,
                minHeight: '',
                minWidth: 75,
                style: 'background-color:white',
                width: 75,
                src: 'transafe_logo.png'
            },
            {
                xtype: 'container',
                flex: 1,
                docked: 'right',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            localStorage.setItem('prevView', Ext.Viewport.getActiveItem().getId());
                            Ext.Viewport.setActiveItem('SignInUpPanel',{
                                type: "slide",
                                direction: "left"
                            });
                        },
                        height: 36,
                        id: 'signInUpBtn',
                        ui: 'action',
                        width: 75,
                        icon: 'icon_login.png',
                        iconAlign: 'center'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            localStorage.setItem('ifLogged', '');
                            localStorage.setItem('username','');
                            console.log('signing out');
                            Ext.Viewport.setActiveItem('list',{
                                type: "slide",
                                direction: "left"
                            });
                            window.location.reload();
                        },
                        height: 36,
                        id: 'signOutBtn',
                        ui: 'action',
                        width: 75,
                        iconAlign: 'center',
                        iconCls: 'delete'
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, e) {
                    Ext.Viewport.setActiveItem('MapViewPanel',{
                        type: "slide",
                        direction: "left"
                    });
                },
                flex: 1,
                docked: 'right',
                height: 75,
                id: 'mapViewBtn',
                ui: 'action',
                width: 75,
                icon: 'icon_mapview.png'
            },
            {
                xtype: 'button',
                handler: function(button, e) {
                    Ext.Viewport.setActiveItem('ListView',{
                        type: "slide",
                        direction: "left"
                    });
                },
                flex: 1,
                docked: 'right',
                height: 75,
                id: 'listViewBtn',
                maxHeight: '',
                ui: 'action',
                width: 75,
                icon: 'icon_listview_new.png'
            }
        ]
    },

    updateWhenActivated: function() {
        console.log('in ribbon');
        // if anonimous
        if(localStorage.getItem('ifLogged') == 'Invalid User' | localStorage.getItem('ifLogged') === '' | localStorage.getItem('ifLogged') == 'null' | localStorage.getItem('ifLogged') === null){
            console.log('anomimous');
            Ext.getCmp('signInUpBtn').setHeight(75);
            Ext.getCmp('signOutBtn').hide();
            Ext.getCmp('welcomeRibbonLabel').hide();
        }
        else{
            console.log('registered');
            console.log('username is: '+ localStorage.getItem('username'));
            Ext.getCmp('signInUpBtn').setHeight(37.5);
            Ext.getCmp('signOutBtn').show();
            Ext.getCmp('welcomeRibbonLabel').show();
            Ext.getCmp('welcomeRibbonLabel').setHtml('Welcome, ' + localStorage.getItem('username'));
        }
    }

});