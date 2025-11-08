import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '98009ff9f2f44a12868cca42b98b99a8'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '96a35eaa241143368505e040b9b4484a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e4afb33cff384f75bd94da67d09ffd42'
                    }
                    'x_1848134_full_ts/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'e5367941d2f648d594d3a9ea1d656e5f'
                    }
                    'x_1848134_full_ts/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '7eafdeb3832a45c4a9838da7b2b0f287'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '08bc958b40a44b07a1f3b4ec42f66764'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '13ca5d72c65f453fbbb9890ce6eb9f6d'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '163f0679c2344a0d87b8371b5edf520d'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '171bbd1f4e124352a04144fc2b837e44'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1891542445b6482fbced1dbad78feccc'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24503b7a1cd64eaf8849d4848ba63134'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ad295171fcc43249660764a27531037'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41c4bdaade694e51bbbfe492d93d935a'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '425908137e0e4ef8b422f3c0e53510ac'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '426766bbe72947c49e25a0c44bdcd504'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '45a827b360724a9c88f1670b3d79575d'
                        key: {
                            category: 'x_1848134_full_ts_incident'
                            prefix: 'INC'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f4bc5bf377544798482f7c384be7d15'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b1b627ea21145f697709a650677fd7b'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6eef00a18b8548f7b897f37d2c280845'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '839ddc7664fb445e99ca6a91fa81a6f6'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84aeb32b8b5e44029f18f8e14a025735'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a88991a850ff45df8953bafe9e64bd90'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ada21dcae3644ded8dde6a1d1232cb38'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6ed0a60276e4baab3fcfcd86298f9df'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bde46a0b453a4c459c79ffce2d1c05a1'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c5f913eed2044613af488275c24d51c1'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c856f64def2e4bc9b63beeb7ae5f3a44'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd802157cefbf45e3b17e619ffa05a272'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'dc761ab8204843e48a227f5a1f9ce210'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e12c4cf392904b629cedb1f511c4ce38'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e57a38782872455b93a77198ab67ea7b'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ea9e660373f041ef9b9289b7dc888088'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebb46ac26d564d01bde4bae74ec8223d'
                        key: {
                            name: 'x_1848134_full_ts_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                ]
            }
        }
    }
}
