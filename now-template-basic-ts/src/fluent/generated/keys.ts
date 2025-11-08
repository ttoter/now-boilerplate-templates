import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '609bb557dd124ce9a956ccb6dcf3b325'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '264b724f2cb547e884f801a69082f45d'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'ba2d4a252ea646c8828167e837f86a3a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '44d311fc57464c7ebc2ea96e738a78e2'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '7b3a8e3a3f844e339b74764faa6d1222'
                    }
                }
            }
        }
    }
}
