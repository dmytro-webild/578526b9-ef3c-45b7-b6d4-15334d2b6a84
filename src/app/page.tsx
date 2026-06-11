"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CalendarDays, Coffee, Crown, Droplet, Feather, Phone, Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Услуги",          id: "services"},
        {
          name: "Мастера",          id: "team"},
        {
          name: "Контакты",          id: "contact"},
      ]}
      button={{
        text: "Записаться онлайн",        href: "#booking"}}
      brandName="КРУТОЙ УОКЕР"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      title="КРУТОЙ УОКЕР — Барбершоп, где делают мужчин."
      description="Уфа, центр города. Твой стиль — наша работа. Зацени свой новый уровень брутальности!"
      testimonials={[
        {
          name: "Максим 'Лев'",          handle: "@max_lion",          testimonial: "КРУТОЙ УОКЕР — это всегда на высоте! Мастера знают свое дело, атмосфера мужская, а результат — пушка! Теперь только сюда.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-man-with-amulet-neck-is-posing-photographer-dark-photo-studio_613910-3849.jpg"},
        {
          name: "Игорь 'Скала'",          handle: "@igor_rock",          testimonial: "Долго искал 'своего' барбера, и вот нашел! Каждая стрижка идеальна, борода ухожена. Сервис на уровне. Рекомендую всем мужикам Уфы!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-caucasian-man-grey-wall_176420-7265.jpg"},
        {
          name: "Денис 'Гром'",          handle: "@denis_grom",          testimonial: "Был приятно удивлен качеством и отношением. Чувствуешь себя как дома, а уходишь новым человеком. Заряжает уверенностью на все 100!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6410.jpg"},
        {
          name: "Сергей 'Шаман'",          handle: "@serg_shaman",          testimonial: "Профессиональный подход к каждому клиенту, внимание к деталям и отличный результат. Это не просто стрижка, это целый ритуал!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-senior-man-laughing_23-2151203948.jpg"},
        {
          name: "Артём 'Тигр'",          handle: "@artem_tiger",          testimonial: "Лучший барбершоп в городе, без вопросов. Качество, стиль, брутальная атмосфера — здесь есть все, что нужно настоящему мужчине.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-navy-t-shirt-looking-annoyed-shouting-going-wild-while-talking-mobile-phone-standing-pink-wall_141793-81934.jpg"},
      ]}
      buttons={[
        {
          text: "ЗАПИСАТЬСЯ СЕЙЧАС",          href: "#booking"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/barber-doing-haircut-bearded-aged-client-hair-salon_23-2148182013.jpg"
      imageAlt="Брутальная мужская стрижка"
      mediaAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/strong-powerful-african-american-man-black-suit-turtleneck-cap-with-elephant-tusk_627829-1186.jpg",          alt: "Клиент доволен стрижкой"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-elegant-bearded-man-dressed-wool-jacket-bow-tie_613910-3110.jpg",          alt: "Мужчина с ухоженной бородой"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-handsome-male_23-2148884406.jpg",          alt: "Стилизованный портрет мужчины"},
        {
          src: "http://img.b2bpic.net/free-photo/chief-financial-officer-large-company-is-thinking-how-deal-with-crisis-pandemic_549566-104.jpg",          alt: "Мужчина после бритья"},
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-muscled-fit-male-model-man-posing-studio-showing-his-abdominal-muscles-leather-jacket_158538-2317.jpg",          alt: "Уверенный клиент барбершопа"},
      ]}
      avatarText="Присоединяйся к тысячам довольных клиентов!"
      marqueeItems={[
        {
          type: "text-icon",          text: "Классические стрижки",          icon: Scissors,
        },
        {
          type: "text-icon",          text: "Бритье опасной бритвой",          icon: Feather,
        },
        {
          type: "text-icon",          text: "Уход за бородой",          icon: Crown,
        },
        {
          type: "text-icon",          text: "Премиум-косметика",          icon: Droplet,
        },
        {
          type: "text-icon",          text: "Мужская атмосфера",          icon: Coffee,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Почему Мы? Бро, у нас всё по-настоящему!"
      description="Мы не просто стрижем, мы создаем образы. Каждый барбер — профессионал с большой буквы, знающий толк в стиле и брутальности. Доверься лучшим, и мы покажем тебе разницу."
      metrics={[
        {
          value: "5000+",          title: "Довольных братьев"},
        {
          value: "10 лет+",          title: "Опыта в бритье"},
        {
          value: "100%",          title: "Гарантия стиля"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hairclips-scissors-bag_23-2147778856.jpg"
      imageAlt="Набор барбера"
      mediaAnimation="opacity"
      metricsAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "cut",          title: "Мужская Стрижка",          price: "от 1500 руб",          period: "час",          features: [
            "Моделирование",            "Мытье головы",            "Укладка"],
          button: {
            text: "Записаться",            href: "#booking"},
          imageSrc: "http://img.b2bpic.net/free-photo/child-getting-their-hair-blown-salon_23-2150462464.jpg",          imageAlt: "Мастер делает мужскую стрижку"},
        {
          id: "beard",          title: "Стрижка Бороды",          price: "от 800 руб",          period: "30 мин",          features: [
            "Коррекция формы",            "Уход за бородой",            "Горячий компресс"],
          button: {
            text: "Записаться",            href: "#booking"},
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-hipster-bearded-male-sitting-armchair-barber-shop-while-hairdresser-shaves-his-beard-with-dangerous-razor_613910-18507.jpg",          imageAlt: "Мужчина с ухоженной бородой в барбершопе"},
        {
          id: "shave",          title: "Бритье Опасной Бритвой",          price: "от 1200 руб",          period: "45 мин",          features: [
            "Горячий компресс",            "Опасная бритва",            "Успокаивающий лосьон"],
          button: {
            text: "Записаться",            href: "#booking"},
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-barbershop-barber-work-washing-head_627829-7234.jpg",          imageAlt: "Процесс бритья опасной бритвой"},
        {
          id: "top-stylist",          title: "Топ-Стилист",          price: "от 2500 руб",          period: "1.5 часа",          features: [
            "Авторская стрижка",            "Консультация по стилю",            "Премиум-уход"],
          button: {
            text: "Записаться",            href: "#booking"},
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-indian-beard-man-pink-tshirt-sitting-against-wooden-table-cafe-india-model-posed-outdoor_627829-2594.jpg",          imageAlt: "Стильный мужчина с новой прической"},
      ]}
      title="Услуги & Цены: Выбери свой уровень!"
      description="От классики до ультрамодных трендов. Подчеркни свою индивидуальность с КРУТЫМ УОКЕРОМ."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "brodyaga",          name: "Бродяга",          role: "Мастер Бритвы, 10 лет стажа",          imageSrc: "http://img.b2bpic.net/free-photo/positive-bearded-black-male-with-tattoo-cross-arms-dressed-white-shirt_613910-15917.jpg"},
        {
          id: "tankist",          name: "Танкист",          role: "Стилист, 8 лет стажа",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-bearded-male-with-tattoos-arms-dressed-military-jacket-wall-brick_613910-3647.jpg"},
        {
          id: "khan",          name: "Хан",          role: "Топ-Барбер, 12 лет стажа",          imageSrc: "http://img.b2bpic.net/free-photo/bearded-shaved-head-arabic-male-with-tattoos-his-crossed-arms-dressed-white-shirt-posing-grey-background_613910-2276.jpg"},
        {
          id: "ghost",          name: "Призрак",          role: "Молодой Талант, 5 лет стажа",          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-holding-trimmer-showing-pointing-up-with-fingers-number-three_141793-37278.jpg"},
      ]}
      title="Наша Команда: Настоящие Мужики Дела!"
      description="Каждый барбер — это мастер своего дела, который не просто стрижет, а создает произведение искусства. Знакомься с теми, кто превратит тебя в легенду."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Артур 'Лев'",          role: "Предприниматель",          company: "Уфа",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-middle-aged-man-with-beard-hairstyle-dressed-elegant-blue-suit-textured-dark-background-studio_613910-4995.jpg"},
        {
          id: "t2",          name: "Руслан 'Граф'",          role: "Фитнес-тренер",          company: "Уфа",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-positive-blond-bearded-male-dressed-red-fleece-shirt-makes-conversation_613910-13394.jpg"},
        {
          id: "t3",          name: "Дамир 'Сталкер'",          role: "Программист",          company: "Уфа",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-travelling-with-bag_1303-19668.jpg"},
        {
          id: "t4",          name: "Тимур 'Гром'",          role: "Музыкант",          company: "Уфа",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-embracing-man-valentines_23-2148380032.jpg"},
        {
          id: "t5",          name: "Иван 'Бульдог'",          role: "Юрист",          company: "Уфа",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/puzzled-bearded-ginger-man-raises-eyebrow-bewilderment-hears-something-unexpected-from-friend_273609-16955.jpg"},
      ]}
      title="Что Говорят Наши Бро: Отзывы!"
      description="Наши клиенты — наше всё. Слушай, что говорят те, кто уже выбрал КРУТОЙ УОКЕР и не прогадал."
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="БРОНИРУЙ СЕЙЧАС"
      title="Запишись Онлайн: Твой Стиль Ждет!"
      description="Оставь заявку, и мы свяжемся с тобой в течение 10 минут, чтобы подобрать идеальное время и мастера. Удобно, быстро, по-мужски. (Поля: Имя, Номер телефона, Услуга, Мастер, Дата/Время)"
      buttons={[
        {
          text: "ЗАБРОНИРОВАТЬ",          onClick: () => console.log('Booking submitted'),
        },
      ]}
      tagIcon={CalendarDays}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="СВЯЗЬ"
      title="Наши Контакты: Залетай!"
      description="Уфа, ул. Ленина, 57 (центр города, не заблудишься)\nТелефон: +7 (999) 123-45-67 (на связи)"
      buttons={[
        {
          text: "Telegram: КРУТОЙ УОКЕР",          href: "#"},
        {
          text: "WhatsApp: Ответим быстро",          href: "#"},
        {
          text: "Проложить маршрут",          href: "#"},
      ]}
      tagIcon={Phone}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-geometric-abstract-background_1048-16415.jpg"
      imageAlt="Фоновое изображение футера"
      logoText="КРУТОЙ УОКЕР"
      columns={[
        {
          title: "Навигация",          items: [
            {
              label: "Услуги",              href: "#services"},
            {
              label: "Мастера",              href: "#team"},
            {
              label: "Запись",              href: "#booking"},
          ],
        },
        {
          title: "Контакты",          items: [
            {
              label: "Адрес",              href: "#contact"},
            {
              label: "Телефон",              href: "#contact"},
            {
              label: "Telegram",              href: "#"},
          ],
        },
        {
          title: "Социалки",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "VK",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 КРУТОЙ УОКЕР. Все права защищены, братан."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
