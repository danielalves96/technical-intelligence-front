import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export default function ContactForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // await emailjs.send(
      //   process.env.REACT_APP_EMAIL_SERVICE_ID as string,
      //   process.env.REACT_APP_TEMPLATE_EMAIL_ID as string,
      //   templateParams,
      //   process.env.REACT_APP_USER_SERVICE_EMAIL_ID as string,
      // );

      console.log(templateParams);

      reset();
    } catch (e) {
      console.log(`error`);
    }
  };

  return (
    <>
      <S.Title>Booking</S.Title>
      <S.Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="columns">
          <div className="column">
            <input
              type="email"
              {...register(`email`, {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="input "
              placeholder={t(`contactForm.emailAddress`)}
            />
            {errors.email && (
              <span className="help is-danger">
                {t(`contactForm.errorEmail`)}
              </span>
            )}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <input
              type="text"
              {...register(`name`, {
                required: {
                  value: true,
                  message: t(`contactForm.errorName`),
                },
                maxLength: {
                  value: 30,
                  message: t(`contactForm.limitName`),
                },
              })}
              className="input"
              placeholder={t(`contactForm.name`)}
            />
            {errors.name && (
              <span className="help is-danger">{errors.name.message}</span>
            )}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <input
              type="text"
              {...register(`subject`, {
                required: {
                  value: true,
                  message: t(`contactForm.errorSubject`),
                },
                maxLength: {
                  value: 75,
                  message: t(`contactForm.limitSubject`),
                },
              })}
              className="input "
              placeholder={t(`contactForm.subject`)}
            />
            {errors.subject && (
              <span className="help is-danger">{errors.subject.message}</span>
            )}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <textarea
              rows={3}
              {...register(`message`, {
                required: true,
              })}
              className="textarea"
              placeholder={t(`contactForm.message`)}
            />
            {errors.message && (
              <span className="help is-danger">
                {t(`contactForm.errorMessage`)}
              </span>
            )}
          </div>
        </div>

        <S.Button className="button " type="submit">
          {t(`contactForm.send`)}
        </S.Button>
      </S.Form>
    </>
  );
}
