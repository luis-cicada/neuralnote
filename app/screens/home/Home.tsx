import React from 'react'
import HomeFooter from '../../components/modules/home/HomeFooter'
import HomeHeader from '../../components/modules/home/HomeHeader'
import HomeRecordings from '../../components/modules/home/HomeRecordings'
import RecordingPage from '../../components/modules/recording/RecordingPage'
import BottomSheet from '../../components/partials/bottomSheet/BottomSheet'

const Home: React.FC = () => {
  const [order, setOrder] = React.useState<'asc' | 'desc'>('asc')
  const refRBSheet = React.useRef<any>()

  const open = () => {
    refRBSheet.current?.open()
  }

  const close = () => {
    refRBSheet.current?.close()
  }

  return (
    <>
      <HomeHeader order={order} setOrder={setOrder} />
      <HomeRecordings />
      <HomeFooter onPress={open} />
      <BottomSheet refRBSheet={refRBSheet} open={open} close={close}>
        <RecordingPage />
      </BottomSheet>
    </>
  )
}

export default Home
