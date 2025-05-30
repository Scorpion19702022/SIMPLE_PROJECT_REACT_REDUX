import { useState } from 'react'
import NotesInputs from './NotesInputs'
import styles from './Styles/NotesComponent.module.css'
import NotesResult from './NotesResult'

import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks'
import { addNotes, selectNotes, deleteAll, deleteNotes } from '../../Features/Notes/NotesSlice'

const NotesComponent = () => {
	const { notesList, selectCategoryNotes } = useAppSelector(state => state.notes)
	const dispatch = useAppDispatch()

	const currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	const [theme, setTheme] = useState<string>('')
	const [inputDate, setInputDate] = useState<string>(currentDate)
	const [text, setText] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz kategorię')

	const [marksCounter, setMarksCounter] = useState<number>(0)

	const [emptyTheme, setEmptyTheme] = useState<string>('')
	const [emptyText, setEmptyText] = useState<string>('')
	const [emptyKind, setEmptyKind] = useState<string>('')

	const [popupClose, setPopupClose] = useState<boolean>(false)

	const handleChangeTheme = (e: string) => {
		if (e.length <= 10) {
			setTheme(e)
		}
	}

	const handleChangeDate = (e: string) => {
		setInputDate(e)
	}

	const handleChangeText = (e: string) => {
		if (e.length <= 40) {
			setText(e)
			setMarksCounter(e.length)
		}
	}

	const handleChangeKind = (e: string) => {
		setKind(e)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (theme === '' && text === '' && kind === 'wybierz kategorię') {
			setEmptyTheme('podaj tytuł')
			setEmptyText('wpisz tekst')
			setEmptyKind('wybierz kategorię')
		} else if (theme === '' && text === '' && kind !== 'wybierz kategorię') {
			setEmptyTheme('podaj tytuł')
			setEmptyText('wpisz tekst')
			setEmptyKind('')
		} else if (theme === '' && text !== '' && kind === 'wybierz kategorię') {
			setEmptyTheme('podaj tytuł')
			setEmptyText('')
			setEmptyKind('wybierz kategorię')
		} else if (theme !== '' && text === '' && kind === 'wybierz kategorię') {
			setEmptyTheme('')
			setEmptyText('wpisz tekst')
			setEmptyKind('wybierz kategorię')
		} else if (theme !== '' && text !== '' && kind === 'wybierz kategorię') {
			setEmptyTheme('')
			setEmptyText('')
			setEmptyKind('wybierz kategorię')
		} else if (theme !== '' && text === '' && kind !== 'wybierz kategorię') {
			setEmptyTheme('')
			setEmptyText('wpisz tekst')
			setEmptyKind('')
		} else if (theme === '' && text !== '' && kind !== 'wybierz kategorię') {
			setEmptyTheme('podaj tytuł')
			setEmptyText('')
			setEmptyKind('')
		} else if (theme !== '' && text !== '' && kind !== 'wybierz kategorię' && notesList.length < 10) {
			dispatch(addNotes({ id: uuidv4(), themeType: theme, dateType: inputDate, textType: text, categoryType: kind }))
			setEmptyTheme('')
			setEmptyText('')
			setEmptyKind('')
			setTheme('')
			setInputDate(currentDate)
			setText('')
			setKind('wybierz kategorię')
			setMarksCounter(0)
		}

		if (notesList.length >= 10) {
			setPopupClose(true)
		}
	}

	const handleSelectNotes = (select: string) => {
		dispatch(selectNotes(select))
	}

	const handleClosePopup = () => {
		setPopupClose(false)
	}

	const handleDeleteAllNotes = () => {
		dispatch(deleteAll())
	}

	const handleDeleteOneNotes = (id: string) => {
		dispatch(deleteNotes(id))
	}

	return (
		<section className={styles.wrapper}>
			<NotesInputs
				inputTheme={theme}
				date={inputDate}
				inputText={text}
				inputKind={kind}
				countMarks={marksCounter}
				isErrorTheme={emptyTheme}
				isErrorText={emptyText}
				isErrorKind={emptyKind}
				changeTheme={handleChangeTheme}
				changeDate={handleChangeDate}
				changeText={handleChangeText}
				changeKind={handleChangeKind}
				submit={handleSubmit}
			/>
			<NotesResult
				closePopup={handleClosePopup}
				popupAction={popupClose}
				notesLists={notesList}
				deleteAllNotes={handleDeleteAllNotes}
				deleteNotes={handleDeleteOneNotes}
				selectCategory={selectCategoryNotes}
				select={handleSelectNotes}
			/>
		</section>
	)
}

export default NotesComponent
