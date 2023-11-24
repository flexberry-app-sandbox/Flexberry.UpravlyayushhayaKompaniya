import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISUpravlyayushhaya_kompaniyaБазаДанныхЛСLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l';
import IISUpravlyayushhaya_kompaniyaДолжностиLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-должности-l';
import IISUpravlyayushhaya_kompaniyaЖилецLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-жилец-l';
import IISUpravlyayushhaya_kompaniyaКвитанцияLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-квитанция-l';
import IISUpravlyayushhaya_kompaniyaКоммуУслугиLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l';
import IISUpravlyayushhaya_kompaniyaОрганизацияLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-организация-l';
import IISUpravlyayushhaya_kompaniyaПерерасчетКУLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l';
import IISUpravlyayushhaya_kompaniyaСотрудникиLForm from './forms/i-i-s-upravlyayushhaya-kompaniya-сотрудники-l';
import IISUpravlyayushhaya_kompaniyaБазаДанныхЛСEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e';
import IISUpravlyayushhaya_kompaniyaДолжностиEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-должности-e';
import IISUpravlyayushhaya_kompaniyaЖилецEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-жилец-e';
import IISUpravlyayushhaya_kompaniyaКвитанцияEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-квитанция-e';
import IISUpravlyayushhaya_kompaniyaКоммуУслугиEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e';
import IISUpravlyayushhaya_kompaniyaОрганизацияEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-организация-e';
import IISUpravlyayushhaya_kompaniyaПерерасчетКУEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e';
import IISUpravlyayushhaya_kompaniyaСотрудникиEForm from './forms/i-i-s-upravlyayushhaya-kompaniya-сотрудники-e';
import IISUpravlyayushhaya_kompaniyaБазаДанныхЛСModel from './models/i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с';
import IISUpravlyayushhaya_kompaniyaДолжностиModel from './models/i-i-s-upravlyayushhaya-kompaniya-должности';
import IISUpravlyayushhaya_kompaniyaЖилецModel from './models/i-i-s-upravlyayushhaya-kompaniya-жилец';
import IISUpravlyayushhaya_kompaniyaКвитанцияModel from './models/i-i-s-upravlyayushhaya-kompaniya-квитанция';
import IISUpravlyayushhaya_kompaniyaКоммуУслугиModel from './models/i-i-s-upravlyayushhaya-kompaniya-комму-услуги';
import IISUpravlyayushhaya_kompaniyaОрганизацияModel from './models/i-i-s-upravlyayushhaya-kompaniya-организация';
import IISUpravlyayushhaya_kompaniyaПерерасчетКУModel from './models/i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у';
import IISUpravlyayushhaya_kompaniyaСотрудникиModel from './models/i-i-s-upravlyayushhaya-kompaniya-сотрудники';
import IISUpravlyayushhaya_kompaniyaТЧПерерасчетаКУModel from './models/i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у';
import IISUpravlyayushhaya_kompaniyaТЧквитанцииModel from './models/i-i-s-upravlyayushhaya-kompaniya-т-чквитанции';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с': IISUpravlyayushhaya_kompaniyaБазаДанныхЛСModel,
    'i-i-s-upravlyayushhaya-kompaniya-должности': IISUpravlyayushhaya_kompaniyaДолжностиModel,
    'i-i-s-upravlyayushhaya-kompaniya-жилец': IISUpravlyayushhaya_kompaniyaЖилецModel,
    'i-i-s-upravlyayushhaya-kompaniya-квитанция': IISUpravlyayushhaya_kompaniyaКвитанцияModel,
    'i-i-s-upravlyayushhaya-kompaniya-комму-услуги': IISUpravlyayushhaya_kompaniyaКоммуУслугиModel,
    'i-i-s-upravlyayushhaya-kompaniya-организация': IISUpravlyayushhaya_kompaniyaОрганизацияModel,
    'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у': IISUpravlyayushhaya_kompaniyaПерерасчетКУModel,
    'i-i-s-upravlyayushhaya-kompaniya-сотрудники': IISUpravlyayushhaya_kompaniyaСотрудникиModel,
    'i-i-s-upravlyayushhaya-kompaniya-т-ч-перерасчета-к-у': IISUpravlyayushhaya_kompaniyaТЧПерерасчетаКУModel,
    'i-i-s-upravlyayushhaya-kompaniya-т-чквитанции': IISUpravlyayushhaya_kompaniyaТЧквитанцииModel
  },

  'application-name': 'Upravlyayushhaya_kompaniya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Upravlyayushhaya_kompaniya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Upravlyayushhaya_kompaniya',
          title: 'Upravlyayushhaya_kompaniya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'upravlyayushhaya-kompaniya': {
          caption: 'Upravlyayushhaya_kompaniya',
          title: 'Upravlyayushhaya_kompaniya',
          'i-i-s-upravlyayushhaya-kompaniya-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l': {
            caption: 'Перерасчет КУ',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-квитанция-l': {
            caption: 'Квитанция',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-жилец-l': {
            caption: 'Жилец',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l': {
            caption: 'База данных ЛС',
            title: ''
          },
          'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l': {
            caption: 'Комму услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l': IISUpravlyayushhaya_kompaniyaБазаДанныхЛСLForm,
    'i-i-s-upravlyayushhaya-kompaniya-должности-l': IISUpravlyayushhaya_kompaniyaДолжностиLForm,
    'i-i-s-upravlyayushhaya-kompaniya-жилец-l': IISUpravlyayushhaya_kompaniyaЖилецLForm,
    'i-i-s-upravlyayushhaya-kompaniya-квитанция-l': IISUpravlyayushhaya_kompaniyaКвитанцияLForm,
    'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l': IISUpravlyayushhaya_kompaniyaКоммуУслугиLForm,
    'i-i-s-upravlyayushhaya-kompaniya-организация-l': IISUpravlyayushhaya_kompaniyaОрганизацияLForm,
    'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l': IISUpravlyayushhaya_kompaniyaПерерасчетКУLForm,
    'i-i-s-upravlyayushhaya-kompaniya-сотрудники-l': IISUpravlyayushhaya_kompaniyaСотрудникиLForm,
    'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e': IISUpravlyayushhaya_kompaniyaБазаДанныхЛСEForm,
    'i-i-s-upravlyayushhaya-kompaniya-должности-e': IISUpravlyayushhaya_kompaniyaДолжностиEForm,
    'i-i-s-upravlyayushhaya-kompaniya-жилец-e': IISUpravlyayushhaya_kompaniyaЖилецEForm,
    'i-i-s-upravlyayushhaya-kompaniya-квитанция-e': IISUpravlyayushhaya_kompaniyaКвитанцияEForm,
    'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e': IISUpravlyayushhaya_kompaniyaКоммуУслугиEForm,
    'i-i-s-upravlyayushhaya-kompaniya-организация-e': IISUpravlyayushhaya_kompaniyaОрганизацияEForm,
    'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e': IISUpravlyayushhaya_kompaniyaПерерасчетКУEForm,
    'i-i-s-upravlyayushhaya-kompaniya-сотрудники-e': IISUpravlyayushhaya_kompaniyaСотрудникиEForm
  },

});

export default translations;
