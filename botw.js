const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const WebWhatsappProvider = require('@bot-whatsapp/provider/web-whatsapp')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer(['Hola, bienvenido a mi tienda', '¿Como puedo ayudarte?'])
    .addAnswer(['Tengo:', 'Zapatos', 'Bolsos', 'etc ...'])

/**
 * Esta es la funcion importante es la que realmente inicia
 * el chatbot.
 */
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(WebWhatsappProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

main()