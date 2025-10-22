describe('Frontend Web Sitesi Testler', () => {
  it('Siteye giriliyor mu?', () => {
    cy.visit('http://localhost:5173/')
  })

  it('Axios post atılırken yükleniyor yazısı görünüyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Yükleniyor...").should('be.visible')
  })

  it('Karanlık Moda geçiyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('label').click()
    cy.contains("Karanlık Moda Geçildi!").should('be.visible')
    cy.get('div').eq(1).should('have.css', 'background-color', 'oklch(0.257 0.09 281.288)')

  })

  it('Karanlık Moddan Aydınlık Moda geçiyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('label').click()
    cy.contains("Karanlık Moda Geçildi!").should('be.visible')
    cy.get('div').eq(1).should('have.css', 'background-color', 'oklch(0.257 0.09 281.288)')
    cy.get('label').click()
    cy.contains("Aydınlık Moda Geçildi!").should('be.visible')
    cy.get('div').eq(1).should('have.css', 'background-color', 'oklch(0.457 0.24 277.023)')
  })

  it('Tüm sayfa İngilizce oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').first().click()
    cy.contains("Switched to English!").should('be.visible')
    cy.contains("I am a Frontend Developer...").should('be.visible')
    cy.contains("...who likes to craft solid and scalable frontend products with great user experiences.").should('be.visible')
    cy.contains("Skills").should('be.visible')
    cy.contains("Profile").should('be.visible')
    cy.contains("Birth date").should('be.visible')
    cy.contains("City of residence").should('be.visible')
    cy.contains("Education level").should('be.visible')
    cy.contains("İstanbul Unv. Bachelor’s Degree in Mathematics, 2025").should('be.visible')
    cy.contains("Preferred role").should('be.visible')
    cy.contains("About Me").should('be.visible')
    cy.contains("I am a Fullstack Software Development student at Workintech. I enjoy improving my skills in software development and learning new technologies. I am a team player, open to learning, and aiming to build a career in this field.").should('be.visible')
    cy.contains("Projects").should('be.visible')
    cy.contains("A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.").should('be.visible')
    cy.contains("View Site").should('be.visible')
    cy.contains("Send me a message!").should('be.visible')
    cy.contains("Got a question or proposal, or just want to say hello? Go ahead.").should('be.visible')
  })

  it('Dil İngilizce`den Türkçe`ye geçiyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').first().click()
    cy.contains("Switched to English!").should('be.visible')
    cy.contains("I am a Frontend Developer...").should('be.visible')
    cy.get('button').first().click()
    cy.contains("Türkçe'ye Geçildi!").should('be.visible')
    cy.contains("Ben bir Frontend Geliştiricisiyim...").should('be.visible')
  })

  it('Tüm sayfa Türkçe oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').first().click()
    cy.contains("Switched to English!").should('be.visible')
    cy.contains("I am a Frontend Developer...").should('be.visible')
    cy.get('button').first().click()
    cy.contains("Türkçe'ye Geçildi!").should('be.visible')
    cy.contains("Ben bir Frontend Geliştiricisiyim...").should('be.visible')
    cy.contains("...kullanıcıya mükemmel deneyimler sunan, sağlam ve ölçeklenebilir frontend ürünleri geliştirmeyi seven.").should('be.visible')
    cy.contains("Yetenekler").should('be.visible')
    cy.contains("Profil").should('be.visible')
    cy.contains("Doğum günü").should('be.visible')
    cy.contains("İkamet Şehri").should('be.visible')
    cy.contains("Eğitim Durumu").should('be.visible')
    cy.contains("İstanbul Ünv. Matematik Lisans, 2025").should('be.visible')
    cy.contains("Tercih Ettiği Rol").should('be.visible')
    cy.contains("Hakkımda").should('be.visible')
    cy.contains("Workintech yazılım kursunda Fullstack Yazılım öğrencisiyim. Yazılım geliştirme alanında kendimi geliştirmeyi seviyorum ve yeni teknolojiler öğrenmekten keyif alıyorum. Takım çalışmasına uyum sağlayabilen, öğrenmeye açık biriyim ve bu alanda kariyer yapmak istiyorum.").should('be.visible')
    cy.contains("Projeler").should('be.visible')
    cy.contains("Basit, özelleştirilebilir ve minimal kurulumlu bir çerez eklentisi, kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanır. Vanilla JS, SCSS ve Parcel Bundler kullanılarak oluşturulmuştur. Bir NPM paketi olarak mevcuttur ve Git deposu sayesinde kodda ve temalarda her türlü özelleştirme mümkündür.").should('be.visible')
    cy.contains("Siteyi Gör").should('be.visible')
    cy.contains("Benimle iletişime geç!").should('be.visible')
    cy.contains("Bir sorunuz, teklifiniz ya da sadece selam vermek mi istiyorsunuz? İletişime geçmekten çekinmeyin.").should('be.visible')
  })

  it('GitHub butonuna tıklandığında Github sayfası açılıyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('a').first().click()
    cy.url().should('eq','https://github.com/melikegezmis')
    cy.origin('https://github.com/melikegezmis', () => {
      cy.contains('melikegezmis').should('exist');
    })
  })

  it('Projelerdeki ilk Github yazısına tıklandığında Github`a yönlendiriyor', () => {
    cy.visit('http://localhost:5173/')
    cy.get('a').eq(3).click()
    cy.url().should('eq','https://github.com/melikegezmis/pizza-sayfasi-html-css-s4')
    cy.origin('https://github.com/melikegezmis/pizza-sayfasi-html-css-s4', () => {
      cy.contains('pizza-sayfasi-html-css-s4').should('exist');
    })
  })

  it('Projelerdeki ikinci Github yazısına tıklandığında Github`a yönlendiriyor', () => {
    cy.visit('http://localhost:5173/')
    cy.get('a').eq(5).click()
    cy.url().should('eq','https://github.com/melikegezmis/html-css-react-pizza-sayfasi-s8')
    cy.origin('https://github.com/melikegezmis/html-css-react-pizza-sayfasi-s8', () => {
      cy.contains('html-css-react-pizza-sayfasi-s8').should('exist');
    })
  })
})