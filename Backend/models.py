from mongoengine import Document, StringField, DictField

class Timetable(Document):
    division = StringField(required=True)
    timetable_data = DictField(required=True)
