import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '7a8076ff5264468ea22faef9c332932a'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'a317ca90ecbd4faf9dfbdca8a1d4306b'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd5a003475325434ca35cd0bf9d084f83'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '68ecc5a675364b52b46ec49e0273b726'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '177d8fd0e6c944c68057b55d8e2f9695'
                    }
                }
            }
        }
    }
}
