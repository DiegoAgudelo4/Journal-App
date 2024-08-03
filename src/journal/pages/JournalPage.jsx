import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../view'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {

  return (
    <JournalLayout>
      {/* <Typography>Eiusmod et do proident eiusmod ut culpa. Reprehenderit nostrud ut cillum enim cupidatat id. Cupidatat ea dolor pariatur cupidatat et sint officia eu minim dolore sunt.</Typography> */}

      {/* nothing selected */}
      <NothingSelectedView/>
      
      {/*  Note View*/}
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.75},
          position: 'fixed',
          right: 50,
          bottom:50,

        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>


      </IconButton>
    </JournalLayout>
  )
}
