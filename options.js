// Options for MQTT connections and general options

const mqtt = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	mqtt_auth: undefined,
	clientId: undefined,
	keepalive: 60,
	clean: false, // false for persistent sessions
	will: {
		topic: undefined,
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	topics: {
		roots: {
			watchman: 'senti/services/watchman/',
			client: 'senti/sensor/'
		},
		comms: {
			cmd: 'cmd',
			data: 'data',
			status: 'status',
			temperature: 'temperature',
			watch: 'watch'
		},
	},
}

const options = {
	logLocale: 'da',
	versions: {
		watchman_version: '',
		api_version: '1',
		client_version: ''
	}
}

const server = {
	server_title: 'Senti Watchman',
	port: 3001
}

const watch = {
	watch_changes: true,
	phone_home: true
}

const services = {
	mqtt: mqtt,
	options: options,
	watchman: 'senti-watchman.service',
	client: 'senti-mqtt-client.service',
	ping: true,
	ping_interval: 5000,
	slack: {
		channel: 'https://hooks.slack.com/services/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',
		baseURL: 'https://hooks.slack.com/services/',
		token: 'T1GKW3Y83/BD4HVLDA8/IAP9iIxvy5tpO7Sv8AjZGVkx'
	},
}

var config = {
	server: server,
	watch: watch,
	services: services
}

module.exports = { options, mqtt, config }
