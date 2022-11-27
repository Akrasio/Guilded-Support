/**
* class for making Rich Embed Messages
* @constructor
* @param {Object} embed - The embed object its recommended to use the setters instead as it makes it easier.
* the setters also return the instance itself so its possible to chain multiple setters.
*/
class MessageEmbed {
	constructor(data = {}) {

		/**
		* Embed Title
		* @type {String}
		*/
		this.title = data.title;

		/**
		* Embed Content
		* @type {String}
		*/
		this.content = data.content;

		/**
		* The embed description
		* @type {String}
		*/
		this.description = data.description;

		/**
		* The color of the embed
		* @type {Number}
		*/
		this.color = data.color;

		/**
		* The embed Image
		* @type {Object}
		*/
		this.image = data.image;

		/**
		* The embed Video
		* @type {String}
		*/
		this.video = data.video;

		/**
		* The embed TimeStamp
		* @type {String}
		*/
		this.timestamp = data.timestamp;

		/**
		* The embed URL
		* @type {String}
		*/
		this.url = data.url;

		/**
		* The embed Thumbnail
		* @type {Object}
		*/
		this.thumbnail = data.thumbnail;

		/**
		* Embed fields in an array.
		* @type {Array}
		*/
		this.fields = data.fields || [];

		/**
		* The Embed Footer
		* @type {Object}
		*/
		this.footer = data.footer;
	}

  /**
  * Sets the embed title.
  * @param {String} title - The embed title to set, must not exceed 256 characters or an error is thrown.
  * @returns {MessageEmbed}
  */
   resC(color) {
      if (typeof color === 'string') {
      if (color === 'RANDOM') return Math.floor(Math.random() * (0xffffff + 1));
      if (color === 'DEFAULT') return 0;
      color = parseInt(color.replace('#', ''), 16);
    } else if (Array.isArray(color)) {
      color = (color[0] << 16) + (color[1] << 8) + color[2];
    }

    if (color < 0 || color > 0xffffff) throw new RangeError('COLOR_RANGE');
    else if (Number.isNaN(color)) throw new TypeError('COLOR_CONVERT');

    return color;
  }

  setTitle(title) {
  	title = String(title);
  	if(title.length > 256) {
  		throw new RangeError("Embed title must not exceed 256 characters!");
  	}
  	this.title = title
  	return this; // return embed object every set so its possible to chain multiple .set like .setTitle().setDescription() etc
  }
  /**
  * Sets the embed content.
  * @param {String} content - The embed content to set, must not exceed 256 characters or an error is thrown.
  * @returns {MessageEmbed}
  */
  setContent(content) {
  	content = String(content);
  	if(content.length > 2000) {
  		throw new RangeError("Embed content must not exceed 2000 characters!");
  	}
  	this.content = content
  	return this; // return embed object every set so its possible to chain multiple .set like .setcontent().setDescription() etc
  }

  /**
  * Set the embed description.
  * @param {String} description - The description to set, must not exceed 2048 Characters or an error is thrown.
  * @returns {MessageEmbed}
  */
  setDescription(description) {
  	description = String(description);
  	if(description.length > 2048) { 
  	 throw new RangeError("Embed Description must not exceed 2048 characters!");
  	 }
  	this.description = description;
  	return this;
  }

  setImage(url) {
    this.image = { url };
    return this;
  }

  setUrl(url) {
    this.url = url;
    return this;
  }

  setVideo(url) {
    this.video = { url };
    return this;
  }

  setThumbnail(url) {
    this.thumbnail = { url };
    return this;
  }

  setTimestamp(timestamp) {
    this.timestamp = timestamp;
    return this;
  }
  /**
  * Set the embed color
  * @param {Number} color - the Embed's color in bitwise integer.
  * @returns {MessageEmbed}
  * @example
  * .setColor(0x00FF00) // sets color to green.
  */

  setColor(color) {
  	this.color = this.resC(color);
  	return this;
  }

  /**
  * Add a field, the field is then pushed to fields array.
  * fields must not exceed 25 fields or an error is thrown.
  * @param {String} name - The field's name, must not exceed 256 characters or an error is thrown.
  * @param {String} value - The field's value, must not exceed 1024 Characters or an error is thrown.
  * @param {Boolean} inline=false - Wether the field must have an inline or not.
  * @returns {MessageEmbed}
  */
  addField(name, value, inline = false) {
  	if(typeof inline !== 'boolean') throw new TypeError("Inline can be a boolean only");
  	if(name.length > 256) throw new RangeError("Embed field values must not exceed 256 characters");
  	if(value.length > 1024) throw new RangeError("Embed field values must not exceed 1024 characters");
  	if(this.fields.length > 25) throw new RangeError("Fields can only be upto 25 fields");
  	this.fields.push({name, value, inline});
  	return this;
  }
  
  /**
  * Sets the Embed footer.
  * @param {String} text - The text for footer to set.
  * @param {String} iconURL - Icon URL for footer. optional
  * @returns {MessageEmbed}
  */
  setFooter(text, iconURL) {
    this.footer.text = text;
    this.footer.icon_url = iconURL;
    return this;
  }
}

module.exports = MessageEmbed;
