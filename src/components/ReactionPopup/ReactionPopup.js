import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ReactionPopup.scss';

const ReactionPopup = ({ isOpen, isLike }) => {
	const [email, setEmail] = useState('');
	const handleSubmitReactionForm = e => {
		e.preventDefault();
		if (isLike) {
			// отправить запрос на положительную реакцию
		} else {
			// отправить запрос на негативную реакцию
		}
	};
	const handleEmailChange = e => setEmail(e.target.value);
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: 'auto' }}
					exit={{ height: 0 }}
					transition={{ duration: 0.5 }}
					className='reaction-popup'
				>
					<div className='reaction-popup__container'>
						<h3 className='consul-popup__title'>Поставить оценку</h3>
						<form className='popup-form' onSubmit={handleSubmitReactionForm}>
							<input
								type='email'
								className='popup-form__input'
								placeholder='Email'
								value={email}
								onChange={handleEmailChange}
							/>
							<button
								className='button button_default'
								style={{ width: '100%' }}
							>
								Поставить
							</button>
						</form>
						<p className='consul-popup__conf'>
							Нажимая на кнопку, я соглашаюсь с условиями{' '}
							<a href='#' className='reaction-popup__link'>
								политики конфиденциальности.
							</a>
						</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ReactionPopup;
