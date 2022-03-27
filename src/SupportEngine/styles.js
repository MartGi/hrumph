export const styles = {


    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundColor: '#d488eb',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // Size
        width: '84px',
        height: '84px',
        zIndex: '-1',
    },
    avatarHello: {
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)',
        // Layering
        zIndex: '0',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    supportWindow: {
        // Position

        bottom: '116px',
        right: '24px',
        // Size
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        // Border
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '1008px',
        backgroundColor: '#7a39e0',
        transform: 'skewY(-12deg)',
        zIndex: '1',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '20%',
        color: 'white', 
        fontSize: '100px',
        fontWeight: '600',
        zIndex: '2',
    },
    emailInput: { 
        width: '40%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #7a39e0',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '60%', 
        color: '#7a39e0', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#7a39e0', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    },

}