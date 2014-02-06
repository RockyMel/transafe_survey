/*
 * File: app/view/StatisticsTabPanel.js
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

Ext.define('MyApp.view.StatisticsTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.StatisticsTabPanel',

    requires: [
        'MyApp.view.RibbonMenuPanel',
        'Ext.Label',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.Legend'
    ],

    config: {
        tabBarPosition: 'bottom',
        activeItem: 2,
        id: 'StatisticsTabPanel',
        items: [
            {
                xtype: 'RibbonMenuPanel',
                docked: 'top',
                id: 'statisticsRibbon'
            },
            {
                xtype: 'label',
                docked: 'top',
                html: 'You voted',
                id: 'voted'
            },
            {
                xtype: 'label',
                docked: 'top',
                html: 'default location',
                id: 'statLocationLabel'
            },
            {
                xtype: 'container',
                title: 'Happy',
                layout: 'fit',
                scrollable: true,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        scrollable: true,
                        items: [
                            {
                                xtype: 'polar',
                                id: 'happyPie',
                                maxWidth: '50%',
                                colors: [
                                    '#D5FFD5',
                                    '#ABFFAB',
                                    '#82FF82',
                                    '#58FF58',
                                    '#2EFF2E',
                                    '#FFFFFF',
                                    '#FFD5D5',
                                    '#FFABAB',
                                    '#FF8282',
                                    '#FF5858',
                                    '#FF2E2E'
                                ],
                                store: 'FeelingsStore',
                                series: [
                                    {
                                        type: 'pie',
                                        labelField: 'HappySadText',
                                        xField: 'HappySadValue'
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'rotate'
                                    }
                                ],
                                legend: {
                                    xtype: 'legend',
                                    id: 'happyLegend'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Excited',
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        scrollable: true,
                        items: [
                            {
                                xtype: 'polar',
                                id: 'excitedPie',
                                maxWidth: '50%',
                                colors: [
                                    '#D5FFD5',
                                    '#ABFFAB',
                                    '#82FF82',
                                    '#58FF58',
                                    '#2EFF2E',
                                    '#FFFFFF',
                                    '#FFD5D5',
                                    '#FFABAB',
                                    '#FF8282',
                                    '#FF5858',
                                    '#FF2E2E'
                                ],
                                store: 'FeelingsStore',
                                series: [
                                    {
                                        type: 'pie',
                                        labelField: 'BoredExcitedText',
                                        xField: 'BoredExcitedValue'
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'rotate'
                                    }
                                ],
                                legend: {
                                    xtype: 'legend',
                                    id: 'excitedLegend'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Safe',
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'polar',
                                id: 'safePie',
                                maxWidth: '50%',
                                colors: [
                                    '#D5FFD5',
                                    '#ABFFAB',
                                    '#82FF82',
                                    '#58FF58',
                                    '#2EFF2E',
                                    '#FFFFFF',
                                    '#FFD5D5',
                                    '#FFABAB',
                                    '#FF8282',
                                    '#FF5858',
                                    '#FF2E2E'
                                ],
                                store: 'FeelingsStore',
                                series: [
                                    {
                                        type: 'pie',
                                        labelField: 'ScaredSafeText',
                                        xField: 'ScaredSafeValue'
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'rotate'
                                    }
                                ],
                                legend: {
                                    xtype: 'legend',
                                    id: 'safeLegend'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Peaceful',
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'polar',
                                id: 'peacefulPie',
                                maxWidth: '50%',
                                colors: [
                                    '#D5FFD5',
                                    '#ABFFAB',
                                    '#82FF82',
                                    '#58FF58',
                                    '#2EFF2E',
                                    '#FFFFFF',
                                    '#FFD5D5',
                                    '#FFABAB',
                                    '#FF8282',
                                    '#FF5858',
                                    '#FF2E2E'
                                ],
                                store: 'FeelingsStore',
                                series: [
                                    {
                                        type: 'pie',
                                        labelField: 'AngryPeacefulText',
                                        xField: 'AngryPeacefulValue'
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'rotate'
                                    }
                                ],
                                legend: {
                                    xtype: 'legend',
                                    id: 'peacefulLegend'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent(arguments);
    }

});