import { Box } from "@mui/system";


const DesignedTechnicalBox = ({ children, paddingLarge, marginT }) => {
    return (
        <>
            {
                paddingLarge ? <Box sx={{ border: '1px solid rgba(194, 224, 255, 0.08)', padding: { xs: '20px', sm: '80px 60px' }, backgroundColor: '#F6F6F6', borderRadius: '7px', marginTop: '55px' }}>
                    {children}
                </Box> : <Box sx={{ border: '1px solid rgba(194, 224, 255, 0.08)', padding: '20px', backgroundColor: '#F6F6F6', borderRadius: '7px', marginTop: '5px' }}>
                    {children}
                </Box>
            }
        </>
    );
};

export default DesignedTechnicalBox;