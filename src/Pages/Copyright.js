import React from 'react'
import './Copyright.css'
import { motion } from 'framer-motion'
import MetaTitle from '../Components/MetaTitle'

const Copyright = () => {
  return (
    <>
      <MetaTitle title='Splat Studio | Copyright' />
      <div className='container copyrights'>
        <div className='container-center copyright-center'>
          <div className='copyright'>
            <h1>Copyright</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.55, delay: 0.05 }}
            >
              All rights reserved. The content of this website, are subject to
              copyright protection and other laws for the protection of
              intellectual property. No dissemination or alteration of the
              contents of these pages or of the frames or similar measures are
              permitted. Moreover these contents may not be copied,
              disseminated, modified, or made available to third parties without
              prior written permission. This entire website and its contents are
              100% property of Splat media Pvt. Ltd.
            </motion.p>
          </div>
          <div className='copyright disclaimer'>
            <h1>Disclaimer</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.75, delay: 0.1 }}
            >
              You acknowledge and agree that your access to the Website and its
              contents, and your use of the aforementioned, are at your own
              risk. The Website is provided “as is” and “as available” and Splat
              Media Private Limited does not guarantee that the Website will be
              accessible, functional at all times, secure and protected from
              viruses or other harmful components. To the fullest extent
              permitted by law, Splat Media Private Limited expressly disclaims
              all warranties of any nature whatsoever, expressed or implied,
              statutory or otherwise, including, without limitation, implied
              warranties of merchantability or related to services, information,
              content, hyperlinks, functionality or the Website’s security. In
              addition, Splat Media Private Limited is not responsible in any
              way for the content of third parties on the Website, whether
              displayed by Splat Media Private Limited or by third parties.
              Splat Media Private Limited does not control this content and
              cannot be held liable if it is prejudicial, inaccurate, offensive,
              threatening, defamatory, illegal or otherwise objectionable. Splat
              Media Private Limited is not responsible for the conduct or
              behaviour of any of the Website’s users.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Copyright
