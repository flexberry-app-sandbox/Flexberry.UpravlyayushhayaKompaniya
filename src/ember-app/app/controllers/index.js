import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.caption'),
          title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.title'),
          children: [{
            link: 'i-i-s-upravlyayushhaya-kompaniya-организация-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-организация-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-сотрудники-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-квитанция-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-квитанция-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-квитанция-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-должности-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-должности-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-жилец-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-жилец-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-жилец-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l',
            caption: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.upravlyayushhaya-kompaniya.i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})