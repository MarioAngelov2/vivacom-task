import footerLogo1 from "/appStore.svg";
import footerLogo2 from "/googlePlay.svg";
import footerLogo3 from "/huawei.png";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export const aboutCompany = [
  { id: 1, title: "За нас" },
  { id: 2, title: "Етика и съответствие" },
  { id: 3, title: "Марката Vivacom" },
  { id: 4, title: "Мениджмънт" },
  { id: 5, title: "Социална отговорност" },
  { id: 6, title: "Новини" },
  { id: 7, title: "Кариери" },
  { id: 8, title: "Стажантски програми" },
  { id: 9, title: "Доставчици" },
];

export const services = [
  { id: 1, title: "Частни клиенти" },
  { id: 2, title: "Мобилни планове" },
  { id: 3, title: "Предплатени карти" },
  { id: 4, title: "Мобилен Интернет" },
  { id: 5, title: "Устройства" },
  { id: 6, title: "Интернет пакети" },
  { id: 7, title: "Домашен телефон" },
  { id: 8, title: "VoLTE" },
  { id: 9, title: "5G" },
];

export const usefulLinksData = [
  { id: 1, title: "Полезни връзки" },
  { id: 2, title: "Устройство в сервиз" },
  { id: 3, title: "Програма лоялност" },
  { id: 4, title: "Настройки" },
  { id: 5, title: "Активиране на EON TV" },
  { id: 6, title: "Планове за хора с увреждания" },
  { id: 7, title: "Настройки на CA модул" },
  { id: 8, title: "Застраховки" },
  { id: 9, title: "Карта на сайта" },
];

export const footerImages = [
  { id: 1, src: footerLogo1 },
  { id: 1, src: footerLogo2 },
  { id: 1, src: footerLogo3 },
];

export const eonSpecs = [
  {
    title: "ИГРИ И ПРИЛОЖЕНИЯ",
    description:
      "Гледайте YouTube, използвайте любимите си приложения и играйте игри на вашия телевизор.",
    image: "/icon-apps.png",
  },
  {
    title: "АРХИВ ДО 7 ДНИ",
    description:
      "С EON TV можете да гледате телевизионно съдържание до 7 дни назад за 200+ TV канала.",
    image: "/icon-7dni-nazad.png",
  },
  {
    title: "EON ВИДЕОТЕКА",
    description:
      "Наслади се на повече от 15 000 филма и телевизионни сериали, събрани на едно място.",
    image: "/icon-vod.png",
  },
  {
    title: "EON ПРОФИЛ",
    description:
      "Създайте EON TV профил за себе си и за всеки от семейството. EON TV разбира какво искате да гледате и препоръчва съдържание, което ви интересува. Може да създадете до 5 профила.",
    image: "/eon-profil-icon.png",
  },
  {
    title: "ТЪМЕН ИЛИ СВЕТЪЛ ФОН",
    description:
      "ТЪМЕН ИЛИ СВЕТЪЛ ФОН: Сега можете да гледате EON TV с тъмен или светъл фон на всички устройства. Направето го по свой вкус. За всеки профил фонът може да е различен.",
    image: "/icon-fon.png",
  },
  {
    title: "ПЕРСОНАЛИЗИРАНО СЪДЪРЖАНИЕ",
    description:
      "ПЕРСОНАЛИЗИРАНО СЪДЪРЖАНИЕ: Гледайте съдържание, препоръчано само за вас по телевизията и в EON Видеотека.",
    image: "/icon-personalizacia.png",
  },
  {
    title: "EON ЗА ДЕЦА",
    description:
      "EON ЗА ДЕЦА: Детски телевизионни канали и съдържание от EON Видеотека. Забавно и защитено пространство за всяко дете.",
    image: "/eon-kids-icon.png",
  },
  {
    title: "ТЕЛЕВИЗИЯ НА ЖИВО",
    description:
      "ТЕЛЕВИЗИЯ НА ЖИВО: Гледайте най-популярните телевизионни програми с висока разделителна способност.",
    image: "/icon-live-tv.png",
  },
  {
    title: "ПРОДЪЛЖЕТЕ НА ДРУГО УСТРОЙСТВО",
    description:
      "ПРОДЪЛЖЕТЕ НА ДРУГО УСТРОЙСТВО: Можете да започнете да гледате съдържание от EON Видеотека на едно устройство, след което да продължите гледането на друго устройство.",
    image: "/icon-continue.png",
  },
  {
    title: "ВАШЕТО СЪДЪРЖАНИЕ",
    description:
      "ВАШЕТО СЪДЪРЖАНИЕ: Любимите ви сериали, филми, предавания и напомняния са налични на едно място в раздел „Запазено“.",
    image: "/icon-mylibrary.png",
  },
  {
    title: "4K РЕЗОЛЮЦИЯ",
    description:
      "4K РЕЗОЛЮЦИЯ: Влезте в един свят от ново измерение с разнообразие от съдържание в 4К резолюция.",
    image: "/icon-search.png",
  },
];

export const contactData = [
  {
    title: "СВЪРЖЕТЕ СЕ С НАС",
    text: "За връзка с Обслужване на клиенти – тел. (087) 123",
    logo: MdLocalPhone,
  },
  {
    title: "ПОСЕТЕТЕ НИ",
    text: "Заповядайте в наш магазин.",
    logo: FaLocationDot,
  },
  {
    title: "ПИШЕТЕ НИ",
    text: "Пишете ни тук",
    logo: IoMailOutline,
  },
];
