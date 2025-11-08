import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'b1d0f75707954f4a9ec42172ac21ef9e'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'f318951630b1441190db48f88dac2ea4'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '076d4163881842949c164a9b82a65a9a'
                    }
                    'x_1848134_full_js/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'bb1d667e3093447884f3b9f42b4d221f'
                    }
                    'x_1848134_full_js/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '167c741daf1047d2a43381330f3ad4aa'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '03cd5b9160a84256aefc2ca920b9b21b'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '169f825507f54b959ee65c366c0a3560'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '193ac0fe85a9418ca341523c22d86463'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d6fa7f4e90f49d0875f46d7dc14b8d5'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a6749b192c84d739251d90c0b3357ef'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d4227ec72b24d26bae5115706b7df4f'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ee3c09436954a2290681a0234d3cab4'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46841878e9f643ed8549105f08c6bbb1'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4801412021f5420bac476c633f9a6304'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d1946e1c000484f9faf5b5313c5777d'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e21a568d97240b1834bfd5d19109c6f'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f83eff0637445498cd657085980b07c'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7400e7256574441aa11274521ba31575'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '797149062d7c4701819e65ec7b83acff'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c0abc31bcb64704b6e0f4f91d067002'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f2dea4912dc409fa1e4de48cf17e520'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a190147094e474cae67a35be26174c7'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9b80e96641774ed485c350348e512941'
                        key: {
                            name: 'x_1848134_full_js_incident'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a2d35cfdc03042888ed5aa01634b9b5d'
                        key: {
                            category: 'x_1848134_full_js_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4eec8a2f686423b9acd83df34b27b07'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc7f234e353d4e8e85e2cfa14f2fc548'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd3edd2d7e9e42cfa6bca270af51aba3'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cdb096c522624595bf52d959f7476083'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd385aca9e658407aa4e784874d59b1b6'
                        key: {
                            name: 'x_1848134_full_js_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd63225dddfa04a6285f09306c3804b0b'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd911005a1ecf4fd88b7ea9607fecfabc'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e49b67dd9a7f4b29b07db7ad9d6dbca7'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8f30499d78d481eac9e85940cced7dd'
                        key: {
                            name: 'x_1848134_full_js_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                ]
            }
        }
    }
}
