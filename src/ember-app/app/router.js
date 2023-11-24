import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-база-данных-л-с-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-должности-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-должности-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-должности-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-должности-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-должности-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-жилец-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-жилец-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-жилец-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-жилец-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-жилец-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-квитанция-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-квитанция-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-квитанция-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-квитанция-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-квитанция-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-комму-услуги-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-комму-услуги-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-организация-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-организация-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-организация-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-организация-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-организация-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-перерасчет-к-у-e/new' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-сотрудники-l');
  this.route('i-i-s-upravlyayushhaya-kompaniya-сотрудники-e',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-сотрудники-e/:id' });
  this.route('i-i-s-upravlyayushhaya-kompaniya-сотрудники-e.new',
  { path: 'i-i-s-upravlyayushhaya-kompaniya-сотрудники-e/new' });
});

export default Router;
