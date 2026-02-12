import React from 'react';
import { motion } from 'framer-motion';
import { 
  QrCode, Smartphone, Bell, CheckCircle, 
  Instagram, Mail, MessageCircle, ArrowRight 
} from 'lucide-react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>NottyPers</div>
          <div className={styles.links}>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#funcionamiento">Cómo funciona</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO - Con los celulares laterales como la imagen */}
      <header id="inicio" className={styles.hero}>
        {/* Capas de brillo y color intensas */}
        <div className={styles.heroGlow}></div>
        <div className={styles.heroSpotlight}></div>
        
        {/* Celulares decorativos envolventes */}
        <div className={styles.sidePhones}>
            <div className={styles.phoneWrapperLeft}>
            <Smartphone className={styles.phoneLeft} size={400} strokeWidth={0.5} />
            </div>
            <div className={styles.phoneWrapperRight}>
            <Smartphone className={styles.phoneRight} size={400} strokeWidth={0.5} />
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
        >
            <div className={styles.badge}>El futuro de la gastronomía</div>
            <h1>
            Tu pedido está listo, <br />
            <span className={styles.gradientText}>en un mensaje</span>
            </h1>
            <p>Digitaliza la espera de tus clientes con un simple código QR.</p>
        </motion.div>
      </header>

      {/* NOSOTROS */}
      <section id="nosotros" className={styles.nosotrosSection}>
          <div className={styles.blobDecoration}></div> 
          
          <div className={styles.decorElements}>
              <Bell className={styles.icon1} size={40} />
              <MessageCircle className={styles.icon2} size={30} />
              <Bell className={styles.icon3} size={25} />
              <MessageCircle className={styles.icon4} size={35} />
              <Bell className={styles.icon5} size={28} />
              <MessageCircle className={styles.icon6} size={22} />
          </div>

          <div className={styles.container}>
              <div className={styles.nosotrosGrid}>
                  <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={styles.nosotrosText}
                  >
                      <span className={styles.sectionLabel}>Nosotros</span>
                      <h2>Eliminamos las filas, <br/> conectamos personas.</h2>
                      <p>
                        En NottyPers entendemos que el tiempo de tu cliente es oro. 
                        Por eso creamos una solución donde no hay que descargar nada. 
                      </p>
                      <a href="#contacto" className={styles.learnMore}>Conocer más <ArrowRight size={18}/></a>
                  </motion.div>

                  <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className={styles.nosotrosImage}
                  >
                      <div className={styles.phoneMockup}>
                          <div className={styles.phoneScreen}>
                              <div className={styles.statusBar}>12:45</div>
                              <div className={styles.notificationStack}>
                                  <div className={styles.notification}>
                                    <MessageCircle size={14} color="#16a34a"/>
                                    <div>
                                      <strong>NottyPers</strong>
                                      <p>¡Tu mesa está lista!</p>
                                    </div>
                                  </div>
                                  <div className={styles.notification}>
                                    <CheckCircle size={14} color="#16a34a"/>
                                    <div>
                                      <strong>Pedido #42</strong>
                                      <p>Ya podés retirar tu pedido.</p>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* FUNCIONAMIENTO */}
      <section id="funcionamiento" className={styles.funcSection}>
        {/* Patrón de puntos para el fondo */}
        <div className={styles.gridPattern}></div>
        
        <div className={styles.container}>
            <span className={styles.sectionLabelCenter}>Proceso</span>
            <h2 className={styles.centerTitle}>Cómo funciona</h2>
            
            <div className={styles.funcGrid}>
            {[
                { icon: <QrCode size={32}/>, t: "Escanea", d: "El cliente usa su propia cámara sobre el código QR en la mesa." },
                { icon: <MessageCircle size={32}/>, t: "WhatsApp", d: "Automáticamente se abre un chat para recibir el aviso." },
                { icon: <Bell size={32}/>, t: "Aviso", d: "Notificás al cliente con un click cuando su pedido esté listo." }
            ].map((item, i) => (
                <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className={styles.funcCard}
                >
                <div className={styles.stepNumber}>0{i + 1}</div>
                <div className={styles.iconCircle}>{item.icon}</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
                <div className={styles.cardFooter}></div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* BENEFICIOS */}
        <section id="beneficios" className={styles.beneficiosSection}>
        <div className={styles.container}>
            <span className={styles.sectionLabelCenter}>¿Por qué elegirnos?</span>
            <h2 className={styles.centerTitle}>Adiós a los Beepers, <br/> hola a la eficiencia.</h2>

            {/* Comparativa Directa */}
            <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
                <div className={styles.cardHeaderRed}>Beepers Convencionales</div>
                <ul className={styles.listBad}>
                <li>Costosos de reponer por robos o roturas.</li>
                <li>Alcance limitado (el cliente no puede alejarse).</li>
                <li>Poca higiene: pasan de mano en mano.</li>
                <li>Requieren mantenimiento y carga constante.</li>
                </ul>
            </div>

            <div className={`${styles.comparisonCard} ${styles.cardPremium}`}>
                <div className={styles.cardHeaderGreen}>NottyPers (WhatsApp)</div>
                <ul className={styles.listGood}>
                <li>Costo cero en hardware y reposición.</li>
                <li>Alcance ilimitado: el cliente pasea donde quiera.</li>
                <li>100% Higiénico: el cliente usa su propio móvil.</li>
                <li>Sin cables, sin carga, siempre listo.</li>
                </ul>
            </div>
            </div>

            {/* Grid de beneficios extra */}
            <div className={styles.extraBenefits}>
            <div className={styles.benefitItem}>
                <div className={styles.iconBox}><Smartphone size={24}/></div>
                <h4>Sin Aplicaciones</h4>
                <p>No requiere que el cliente descargue nada. Todo funciona por WhatsApp.</p>
            </div>
            <div className={styles.benefitItem}>
                <div className={styles.iconBox}><CheckCircle size={24}/></div>
                <h4>Fácil de usar</h4>
                <p>Interfaz intuitiva para tu staff. Notifica con un solo toque.</p>
            </div>
            <div className={styles.benefitItem}>
                <div className={styles.iconBox}><Mail size={24}/></div>
                <h4>Base de Datos</h4>
                <p>Empezá a conocer a tus clientes y mantené el contacto.</p>
            </div>
            </div>
        </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className={styles.contactoSection}>
        <div className={styles.darkOverlay}></div>
        <div className={styles.container}>
            <div className={styles.contactoGrid}>
            
            <div className={styles.contactoInfo}>
                <span className={styles.sectionLabel}>Contacto</span>
                <h2 className={styles.whiteTitle}>Listo para <br/> evolucionar?</h2>
                <p className={styles.grayText}>Escribinos y transformá la experiencia de tus clientes hoy mismo.</p>
                
                <div className={styles.contactLinks}>
                <a href="#" className={styles.contactItem}>
                    <div className={`${styles.iconCircle} ${styles.wa}`}><MessageCircle size={24} /></div>
                    <div><span>WhatsApp</span><strong>+54 9 11 1234 5678</strong></div>
                </a>
                <a href="#" className={styles.contactItem}>
                    <div className={`${styles.iconCircle} ${styles.ig}`}><Instagram size={24} /></div>
                    <div><span>Instagram</span><strong>@nottypers</strong></div>
                </a>
                <a href="#" className={styles.contactItem}>
                    <div className={`${styles.iconCircle} ${styles.mail}`}><Mail size={24} /></div>
                    <div><span>Email</span><strong>hola@nottypers.com</strong></div>
                </a>
                </div>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formCardDark}>
                <form>
                    <div className={styles.inputGroupDark}>
                    <label>Nombre del local</label>
                    <input type="text" placeholder="Ej: Pizza House" />
                    </div>
                    <div className={styles.inputGroupDark}>
                    <label>Tu mensaje</label>
                    <textarea placeholder="¿En qué podemos ayudarte?" rows="3"></textarea>
                    </div>
                    <button type="submit" className={styles.neonBtn}>
                    Enviar mensaje <ArrowRight size={20} />
                    </button>
                </form>
                </div>
            </div>

            </div>
        </div>
        </section>
    </div>
  );
};

export default Home;