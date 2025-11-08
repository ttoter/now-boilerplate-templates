import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1b5cf8ea3ed14bc78944cd2e7161e684'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a91cf6ce165a4e5885c7243bbaf8795f'
                    }
                }
            }
        }
    }
}
