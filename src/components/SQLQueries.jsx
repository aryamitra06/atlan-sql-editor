import React from 'react'
import { Divider, Accordion, AccordionDetails, AccordionSummary, Typography, IconButton} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import toast, { Toaster } from 'react-hot-toast';

function SQLQueries() {
    const q1 = () => {
        navigator.clipboard.writeText("SELECT * from users;");
        toast.success('Query copied to clipboard',{position: "bottom-center"});
    }
    const q2 = () => {

    }
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Dummy Queries</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        SELECT * from users; <IconButton onClick={q1}><ContentCopyIcon></ContentCopyIcon></IconButton>
                    </Typography>
                    <Divider/>
                    <Typography>
                        SELECT * from users where; <IconButton onClick={q2}><ContentCopyIcon></ContentCopyIcon></IconButton>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Toaster/>
        </>
    )
}

export default SQLQueries