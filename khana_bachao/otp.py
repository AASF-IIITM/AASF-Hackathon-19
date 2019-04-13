import requests
import json

URL = 'http://www.way2sms.com/api/v1/sendCampaign'

# get request
def sendPostRequest(reqUrl, apiKey, secretKey, useType, phoneNo, senderId, textMessage):
  req_params = {
  'apikey':apiKey,
  'secret':secretKey,
  'usetype':useType,
  'phone': phoneNo,
  'message':textMessage,
  'senderid':senderId
  }
  return requests.post(reqUrl, req_params)

# get response
def respon(number , message):
    response = sendPostRequest(URL, '3ZNVHLNFHI9H2QZMT7SFJACX8P6JQUXV', 'OIVJ9T3G92K9A507', 'stage', str(number), '9516666208', str(message) )
    print(response.text)

"""
  Note:-
    you must provide apikey, secretkey, usetype, mobile, senderid and message values
    and then requst to api
"""
# print response if you want
