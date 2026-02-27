import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { 
  QrCode, Smartphone, Bell, CheckCircle, 
  Instagram, Mail, MessageCircle, ArrowRight, ShoppingBag, Store, PlusCircle, ListChecks, CreditCard 
} from 'lucide-react';
import styles from './Home.module.scss';

const Home = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validaciones
    if (!formData.nombre.trim() || !formData.mensaje.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, completá todos los campos del formulario.',
        confirmButtonColor: '#16a34a'
      });
      return;
    }

    // Validación: No puede empezar con números
    const startsWithNumber = /^\d/;
    if (startsWithNumber.test(formData.nombre)) {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre inválido',
        text: 'El nombre del local no puede comenzar con un número.',
        confirmButtonColor: '#16a34a'
      });
      return;
    }

    // 2. Confirmación antes de enviar
    Swal.fire({
      title: '¿Enviar mensaje?',
      text: "Se abrirá WhatsApp para enviar tu consulta.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Sí, enviar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const telefono = "5491151460922"; 
        const texto = `Hola! Soy *${formData.nombre}* y me gustaría recibir información. %0A%0A*Consulta:* ${formData.mensaje}`;
        const url = `https://wa.me/${telefono}?text=${texto}`;
        window.open(url, '_blank');

        // Limpiar el formulario después de enviar
        setFormData({ nombre: '', mensaje: '' });
        
        Swal.fire({
          title: '¡Redirigiendo!',
          text: 'Tu mensaje está listo en WhatsApp.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  };

    const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "nottypers@gmail.com";

    // Copia directa al portapapeles
    navigator.clipboard.writeText(email);

    // Alerta de confirmación
    Swal.fire({
        title: '¡Email copiado!',
        text: `${email} se ha guardado en tu portapapeles.`,
        icon: 'success',
        confirmButtonColor: '#16a34a',
        timer: 2500,
        timerProgressBar: true,
    });
    };

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
            <a href="#gestor">Gestor de Pedidos</a>
            <a href="#takeaway">Take Away</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="inicio" className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroSpotlight}></div>
        
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

      <section id="gestor" className={styles.gestorSection}>
        <div className={styles.container}>
          <div className={styles.gestorGrid}>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.gestorContent}
            >
              <span className={styles.badgeAlt}>Gestor de Pedidos</span>
              <h2>Tu negocio, <br/> <span className={styles.greenText}>tus reglas.</span></h2>
              <p>
                Nuestro gestor no es solo una lista de pedidos. Es una herramienta potente donde vos tenés el control absoluto de lo que vendés.
              </p>
              
              <div className={styles.featureItem}>
                <div className={styles.miniIcon}><PlusCircle size={20}/></div>
                <div>
                  <h4>Carga Dinámica</h4>
                  <p>Subí tus productos, poné precios y fotos en segundos. Editá o borrá según tu stock diario.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.miniIcon}><ListChecks size={20}/></div>
                <div>
                  <h4>Panel de Control</h4>
                  <p>Recibí las órdenes organizadas. Sabé qué pidió cada cliente y el estado de su pago al instante.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.miniIcon}><CreditCard size={20}/></div>
                <div>
                  <h4>Gestion de Pago Controlado</h4>
                  <p>Tus clientes arman su carrito y pagan con una experiencia fluida, rápida y profesional.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={styles.gestorVisual}
            >
              {/* Mockup del Dashboard de Administración */}
              <div className={styles.adminDashboard}>
                <div className={styles.dashHeader}>
                  <div className={styles.dashDots}><span></span><span></span><span></span></div>
                  <span>nottypers.admin/local</span>
                </div>
                <div className={styles.dashBody}>
                  <div className={styles.dashSidebar}></div>
                  <div className={styles.dashMain}>
                      <div className={styles.dashCard}>
                        <div className={styles.skeletonTitle}></div>
                        <div className={styles.skeletonRow}></div>
                        <div className={styles.skeletonRow}></div>
                      </div>
                      <div className={styles.productBadge}>
                        <ShoppingBag size={14} /> +1 Nueva Orden
                      </div>
                  </div>
                </div>
              </div>
              {/* Mockup del Celular del Cliente solapado */}
              <div className={styles.floatingPhone}>
                <div className={styles.phoneScreenMini}>
                    <div className={styles.cartHeader}>Tu Pedido</div>
                    <div className={styles.cartItem}>🍔 Burger VIP... $8500</div>
                    <div className={styles.payBtn}>Pagar Orden</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TAKE AWAY */}
      <section id="takeaway" className={styles.takeawaySection}>
        <div className={styles.container}>
            <div className={styles.takeawayHeader}>
              <span className={styles.badge}>Nueva Funcionalidad</span>
              <h2 className={styles.mainTitle}>
                Gestión de Take Away <br /> 
                <span className={styles.gradientText}>100% Integrada</span>
              </h2>
              <p className={styles.description}>
                Llevamos tu local al siguiente nivel. Tus clientes piden online <br className={styles.hideMobile} /> 
                y vos recibís todo <strong>ordenado en tu pantalla</strong>.
              </p>
            </div>            

            <div className={styles.takeawayGrid}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.takeawayCard}
              >
                <div className={styles.iconWrapper}><ShoppingBag size={32}/></div>
                <h3>1. El cliente pide</h3>
                <p>Ingresa a tu menú digital personalizado, elige sus productos y finaliza su pedido directamente desde su celular.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={styles.takeawayCard}
              >
                <div className={styles.iconWrapper}><Store size={32}/></div>
                <h3>2. Recibís la orden</h3>
                <p>El pedido aparece al instante en la app de tu local, con el nombre del cliente y el detalle exacto de la compra.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={styles.takeawayCard}
              >
                <div className={styles.iconWrapper}><MessageCircle size={32}/></div>
                <h3>3. Conectás por WhatsApp</h3>
                <p>Al tocar "Listo para retirar" en tu panel de pedidos, al cliente se le avisa automáticamente a su WhatsApp que puede retirar su pedido.</p>
              </motion.div>
            </div>
        </div>

        {/* NUEVA SUBSECCIÓN: EL DIFERENCIAL */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={styles.ecosystemHighlight}
            >
              <div className={styles.highlightContent}>
                <div className={styles.textSide}>
                  <span className={styles.miniBadge}>Ecosistema 360°</span>
                  <h3>Tecnología propia, resultados profesionales</h3>
                  <p>
                    A diferencia de otras soluciones genéricas, nosotros <strong>desarrollamos tanto la app del cliente como tu panel de gestión</strong>. 
                    Esto nos permite ofrecerte una interfaz más rápida, intuitiva y estéticamente superior a la competencia.
                  </p>
                  <ul className={styles.featureList}>
                    <li>✨ <strong>Diseño Premium:</strong> Una experiencia de compra que enamora a tus clientes.</li>
                    <li>🚀 <strong>Máxima Eficiencia:</strong> Administrá pedidos y marcá "Listo para retirar" en un toque.</li>
                    <li>💳 <strong>Pagos Integrados:</strong> Tus clientes pagan por la app y vos gestionás todo desde un solo lugar.</li>
                    <li>💰 <strong>Precio Justo:</strong> Calidad de software de primer nivel a un costo pensado para locales en crecimiento.</li>
                  </ul>
                </div>
                <div className={styles.visualSide}>
                  <div className={styles.priceTag}>
                    <span>El mejor precio del mercado</span>
                  </div>
                  {/* Aquí podrías poner una imagen pequeña de las dos apps juntas */}
                  <div className={styles.appPreviewMockup}>
                    <div className={styles.phoneOne}></div>
                    <div className={styles.phoneTwo}></div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                {/* WHATSAPP: Ahora abre el chat directo */}
                <a 
                    href="https://wa.me/5491151460922" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactItem}
                >
                    <div className={`${styles.iconCircle} ${styles.wa}`}><MessageCircle size={24} /></div>
                    <div><span>WhatsApp</span><strong>+54 9 11 5146 0922</strong></div>
                </a>

                {/* INSTAGRAM: Ahora lleva a tu perfil */}
                <a 
                    href="https://instagram.com/nottypers" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactItem}
                >
                    <div className={`${styles.iconCircle} ${styles.ig}`}><Instagram size={24} /></div>
                    <div><span>Instagram</span><strong>@nottypers</strong></div>
                </a>

                <a href="#" onClick={handleEmailClick} className={styles.contactItem}>
                    <div className={`${styles.iconCircle} ${styles.mail}`}><Mail size={24} /></div>
                    <div>
                    <span>Email</span>
                    <strong>nottypers@gmail.com</strong>
                    </div>
                </a>
                </div>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formCardDark}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroupDark}>
                    <label>Nombre del local o Persona</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Pizza House" 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                    </div>
                    <div className={styles.inputGroupDark}>
                    <label>Tu mensaje</label>
                    <textarea 
                      placeholder="¿En qué podemos ayudarte?" 
                      rows="3"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    ></textarea>
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