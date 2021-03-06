/*
 * File: app/view/EmometerPanel.js
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

Ext.define('MyApp.view.EmometerPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.EmometerPanel',

    requires: [
        'MyApp.view.RibbonMenuPanel',
        'Ext.Container',
        'Ext.Label',
        'Ext.Img',
        'Ext.field.Slider',
        'Ext.Button'
    ],

    config: {
        id: 'EmomenterPanel',
        style: 'background-color: white',
        scrollable: true,
        items: [
            {
                xtype: 'RibbonMenuPanel',
                docked: 'top',
                id: 'emometerRibbon'
            },
            {
                xtype: 'label',
                docked: 'top',
                html: 'Venue: ',
                id: 'venueLblSurvey'
            },
            {
                xtype: 'container',
                scrollable: true,
                items: [
                    {
                        xtype: 'container',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'container',
                                docked: 'top',
                                margin: '10 0 10 0',
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        items: [
                                            {
                                                xtype: 'image',
                                                docked: 'left',
                                                height: 70,
                                                id: 'sadFacePic',
                                                styleHtmlContent: true,
                                                width: 70,
                                                src: 'Emoticons/centered/sad.png'
                                            },
                                            {
                                                xtype: 'image',
                                                docked: 'right',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/happy.png'
                                            },
                                            {
                                                xtype: 'sliderfield',
                                                docked: 'top',
                                                id: 'sliderHappySad',
                                                width: '',
                                                clearIcon: false,
                                                label: '',
                                                labelAlign: 'top',
                                                value: [
                                                    0
                                                ],
                                                maxValue: 5,
                                                minValue: -5
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Sad',
                                        padding: '0 0 0 10'
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'right',
                                        html: 'Happy',
                                        padding: '0 10 0 0'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                margin: '10 0 0 0',
                                width: '',
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        items: [
                                            {
                                                xtype: 'image',
                                                docked: 'right',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/excited.png'
                                            },
                                            {
                                                xtype: 'image',
                                                docked: 'left',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/bored.png'
                                            },
                                            {
                                                xtype: 'sliderfield',
                                                docked: 'top',
                                                id: 'sliderExcitedBored',
                                                width: '',
                                                clearIcon: false,
                                                label: '',
                                                labelAlign: 'top',
                                                value: [
                                                    0
                                                ],
                                                maxValue: 5,
                                                minValue: -5
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Bored',
                                        padding: '0 0 0 10'
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'right',
                                        html: 'Excited',
                                        padding: '0 10 0 0'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                margin: '10 0 10 0',
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        items: [
                                            {
                                                xtype: 'image',
                                                docked: 'right',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/safe.png'
                                            },
                                            {
                                                xtype: 'image',
                                                docked: 'left',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/scared.png'
                                            },
                                            {
                                                xtype: 'sliderfield',
                                                docked: 'top',
                                                id: 'sliderSafeScared',
                                                style: '',
                                                width: '',
                                                clearIcon: false,
                                                label: '',
                                                labelAlign: 'top',
                                                value: [
                                                    0
                                                ],
                                                maxValue: 5,
                                                minValue: -5
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Scared',
                                        padding: '0 0 0 10'
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'right',
                                        html: 'Safe',
                                        padding: '0 10 0 0'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                margin: '10 0 0 0',
                                items: [
                                    {
                                        xtype: 'container',
                                        docked: 'top',
                                        items: [
                                            {
                                                xtype: 'image',
                                                docked: 'right',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/peaceful.png'
                                            },
                                            {
                                                xtype: 'image',
                                                docked: 'left',
                                                height: 70,
                                                width: 70,
                                                src: 'Emoticons/centered/angry.png'
                                            },
                                            {
                                                xtype: 'sliderfield',
                                                docked: 'top',
                                                id: 'sliderPeacefulAngry',
                                                width: '',
                                                clearIcon: false,
                                                label: '',
                                                labelAlign: 'top',
                                                value: [
                                                    0
                                                ],
                                                maxValue: 5,
                                                minValue: -5
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'left',
                                        html: 'Angry',
                                        padding: '0 0 0 10'
                                    },
                                    {
                                        xtype: 'label',
                                        docked: 'right',
                                        html: 'Peaceful',
                                        padding: '0 10 0 0'
                                    }
                                ]
                            },
                            {
                                xtype: 'label'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            Ext.Viewport.setActiveItem('ComfortPanel',{
                                type: "slide",
                                direction: "left"
                            });


                        },
                        itemId: 'mybutton2',
                        ui: 'forward',
                        text: 'Next'
                    }
                ]
            }
        ]
    }

});