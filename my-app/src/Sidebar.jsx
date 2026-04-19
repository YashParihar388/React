function Sidebar({activeTab ,onTabChange }){
    return (
        <>
        
        <button onClick = {onTabChange('users')}>
            users</button>

        <button onClick={()=>onTabChange('stats')}>
            Stats
        </button>
        <p>Active:{activeTab}</p>

        </>
    )
}

export default Sidebar;