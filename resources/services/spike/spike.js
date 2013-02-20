/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.2";
	this.minVersion = "2.0.0a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://www.spike.com/";
	this.ID = "spike.com";
	this.caption = "Spike";
	this.adultContent = false;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	const URL_GET_XML = "http://www.spike.com/ui/xml/mediaplayer/mediagen.groovy?videoId=%1";
	// init result
	var result = new VideoDefinition();
	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);
	// get the video title
	result.title = copyBetween(html, "<title>", "</title>");
	result.title = strReplace(result.title, "| SPIKE", "");
	// get the video id
	var videoId = strRemove(url, 0, url.lastIndexOf("/") + 1);
	// download xml
	var xml = http.downloadWebpage(strFormat(URL_GET_XML, videoId));
	// get flv url
	result.URL = copyBetween(xml, "<src>", "</src>");
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x02,0x03,0x00,0x00,0x00,0x62,0x9d,0x17,
		0xf2,0x00,0x00,0x00,0x09,0x50,0x4c,0x54,0x45,0x00,0x00,0x00,0xf5,0xb8,0x03,0xff,
		0xff,0xff,0xf4,0x80,0xab,0x43,0x00,0x00,0x00,0x3b,0x49,0x44,0x41,0x54,0x08,0x5b,
		0x63,0x58,0x05,0x04,0x0c,0x53,0x43,0x43,0xc3,0x20,0x04,0x98,0xcb,0xc4,0xa4,0xa4,
		0xc0,0xa0,0xa5,0xa4,0xa4,0x04,0x64,0x29,0x2c,0x60,0x58,0xa4,0x05,0x62,0x69,0x01,
		0xc5,0xd0,0x14,0xaf,0x0c,0x0d,0xcd,0x62,0x58,0x35,0x35,0x6c,0x15,0xc3,0xaa,0x95,
		0x59,0xab,0xc0,0xb2,0x00,0xda,0xd8,0x1a,0x70,0xcd,0xca,0xfb,0x95,0x00,0x00,0x00,
		0x00,0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}