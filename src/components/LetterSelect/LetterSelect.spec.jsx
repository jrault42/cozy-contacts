import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { groups } from '../../helpers/testData'
import LetterSelect from './LetterSelect'
import AppLike from '../../tests/Applike'
import Control from './SelectBox/Control'

const setup = () => {
  const root = render(
    <AppLike>
      <LetterSelect
        value={[letters[0]]}
        allLetters={letters}
        onChange={() => {}}
        components={{ Control }}
      />
    </AppLike>
  )
  return { root }
}

describe('LetterSelect', () => {
  it('should display every letter available (section available)', () => {
    const { root } = setup()
    const { getByText } = root

    fireEvent.click(getByText('Manage groups'))
    groups.map(group => expect(getByText(group.name)).toBeTruthy())
  })
})
