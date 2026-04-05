import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short paragraph description of the event details.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. SN Bose Auditorium, CS Lab',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imgUrl',
      title: 'Hero Image URL',
      type: 'url',
      description: 'Provide an absolute URL (e.g. from Supabase) for the image display.',
    }),
    defineField({
      name: 'registration',
      title: 'Is Registration Open?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      hidden: ({ document }) => !document?.registration,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
    },
  },
});
