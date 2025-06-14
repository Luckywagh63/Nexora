// /models/Startup.js
import mongoose from 'mongoose';

const StartupSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  
  // Startup Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  industry: {
    type: String,
    required: true,
    enum: [
      'Construction & Infrastructure',
      'Real Estate Development',
      'Architecture & Design',
      'Engineering Services',
      'Property Management',
      'Building Materials',
      'Smart City Solutions',
      'Green Technology',
      'Other'
    ]
  },
  
  // Funding Information
  fundingAmount: {
    type: String,
    trim: true
  },
  isUSIncorporated: {
    type: String,
    required: true,
    enum: ['yes', 'no']
  },
  
  // Project Details
  productAvailable: {
    type: String,
    required: true,
    enum: ['yes', 'no']
  },
  generatingRevenue: {
    type: String,
    required: true,
    enum: ['yes', 'no']
  },
  pitchDeck: {
    type: String, // Store file path or URL
    default: null
  },
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
  type: String,
  enum: ['pending', 'approved', 'rejected'],
  default: 'pending'
  }
}, {
  timestamps: true
});

// Update the updatedAt field before saving
StartupSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Startup || mongoose.model('Startup', StartupSchema);