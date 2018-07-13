'user strict'

const Joi = require('joi')
const Pkg = require('./package.json')
const elasticsearch = require('elasticsearch')

const singleOption = Joi.object({
	host: Joi.string().default('localhost:9200'),
	log: Joi.string().default('trace')
})

async function register(server, pluginOptions) {
	let options
	try {
		options = await singleOption.validate(pluginOptions)
	} catch (err) {
		throw err
	}

	const client = new elasticsearch.Client({
		host: options.host,
		log: options.log
	})

	server.decorate('toolkit', 'elasticsearch', client)

	server.events.on('stop', () => {
		//stop function
	});

}
exports.plugin = {
	register: register,
	pkg: Pkg
}