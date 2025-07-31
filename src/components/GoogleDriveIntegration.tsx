'use client';

import { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink, Calendar, Users, DollarSign, File, Folder } from 'lucide-react';

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink: string;
  webContentLink?: string;
  thumbnailLink?: string;
  createdTime: string;
  modifiedTime: string;
  size?: string;
  description?: string;
  category: 'form' | 'document' | 'spreadsheet' | 'presentation' | 'image' | 'video' | 'other';
}

interface GoogleDriveIntegrationProps {
  folderId?: string;
  fileTypes?: string[];
  maxFiles?: number;
  showEmbeds?: boolean;
  className?: string;
}

export default function GoogleDriveIntegration({
  folderId = 'legacy-jja-public-folder',
  fileTypes = ['application/vnd.google-apps.form', 'application/vnd.google-apps.document', 'application/vnd.google-apps.spreadsheet'],
  maxFiles = 10,
  showEmbeds = true,
  className = ''
}: GoogleDriveIntegrationProps) {
  const [files, setFiles] = useState<GoogleDriveFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<GoogleDriveFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock Google Drive files - replace with actual Google Drive API
  const mockFiles: GoogleDriveFile[] = [
    {
      id: '1',
      name: 'Class Registration Form',
      mimeType: 'application/vnd.google-apps.form',
      webViewLink: 'https://forms.google.com/legacy-jja-registration',
      createdTime: '2024-01-15T10:00:00Z',
      modifiedTime: '2024-01-15T10:00:00Z',
      description: 'New student registration form with waiver and contact information',
      category: 'form'
    },
    {
      id: '2',
      name: 'Class Schedule 2024',
      mimeType: 'application/vnd.google-apps.spreadsheet',
      webViewLink: 'https://docs.google.com/spreadsheets/legacy-jja-schedule',
      createdTime: '2024-01-01T09:00:00Z',
      modifiedTime: '2024-01-15T14:30:00Z',
      description: 'Updated class schedule with instructor assignments and room allocations',
      category: 'spreadsheet'
    },
    {
      id: '3',
      name: 'Student Handbook',
      mimeType: 'application/vnd.google-apps.document',
      webViewLink: 'https://docs.google.com/document/legacy-jja-handbook',
      createdTime: '2023-12-15T12:00:00Z',
      modifiedTime: '2024-01-10T16:20:00Z',
      description: 'Comprehensive student handbook covering academy rules, etiquette, and procedures',
      category: 'document'
    },
    {
      id: '4',
      name: 'Private Lesson Booking',
      mimeType: 'application/vnd.google-apps.form',
      webViewLink: 'https://forms.google.com/legacy-jja-private-lessons',
      createdTime: '2024-01-10T11:00:00Z',
      modifiedTime: '2024-01-12T09:15:00Z',
      description: 'Schedule private lessons with preferred instructor and time slots',
      category: 'form'
    },
    {
      id: '5',
      name: 'Monthly Membership Prices',
      mimeType: 'application/vnd.google-apps.spreadsheet',
      webViewLink: 'https://docs.google.com/spreadsheets/legacy-jja-pricing',
      createdTime: '2024-01-01T08:00:00Z',
      modifiedTime: '2024-01-08T13:45:00Z',
      description: 'Current membership pricing for all programs and payment options',
      category: 'spreadsheet'
    },
    {
      id: '6',
      name: 'Event Waiver Form',
      mimeType: 'application/vnd.google-apps.form',
      webViewLink: 'https://forms.google.com/legacy-jja-event-waiver',
      createdTime: '2024-01-05T15:30:00Z',
      modifiedTime: '2024-01-07T10:00:00Z',
      description: 'Special event waiver for seminars and competitions',
      category: 'form'
    }
  ];

  useEffect(() => {
    const fetchGoogleDriveFiles = async () => {
      setLoading(true);
      try {
        // In real implementation, use Google Drive API v3:
        // const response = await gapi.client.drive.files.list({
        //   q: `parents in '${folderId}' and (${fileTypes.map(type => `mimeType='${type}'`).join(' or ')})`,
        //   pageSize: maxFiles,
        //   fields: 'files(id,name,mimeType,webViewLink,webContentLink,thumbnailLink,createdTime,modifiedTime,size,description)'
        // });

        await new Promise(resolve => setTimeout(resolve, 800));

        const filteredFiles = mockFiles
          .filter(file => fileTypes.includes(file.mimeType))
          .slice(0, maxFiles);

        setFiles(filteredFiles);
        if (filteredFiles.length > 0) {
          setSelectedFile(filteredFiles[0]);
        }
      } catch (err) {
        setError('Failed to load files from Google Drive');
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleDriveFiles();
  }, [folderId, fileTypes, maxFiles]);

  const getFileIcon = (mimeType: string, category: string) => {
    switch (category) {
      case 'form':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'document':
        return <FileText className="w-5 h-5 text-blue-700" />;
      case 'spreadsheet':
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'presentation':
        return <Calendar className="w-5 h-5 text-orange-600" />;
      default:
        return <File className="w-5 h-5 text-gray-600" />;
    }
  };

  const getFileTypeLabel = (category: string) => {
    switch (category) {
      case 'form':
        return 'Google Form';
      case 'document':
        return 'Google Doc';
      case 'spreadsheet':
        return 'Google Sheet';
      case 'presentation':
        return 'Google Slides';
      default:
        return 'File';
    }
  };

  const formatFileSize = (bytes?: string) => {
    if (!bytes) return 'Unknown size';
    const size = parseInt(bytes);
    const units = ['B', 'KB', 'MB', 'GB'];
    let unitIndex = 0;
    let fileSize = size;

    while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
    }

    return `${fileSize.toFixed(1)} ${units[unitIndex]}`;
  };

  const getEmbedUrl = (file: GoogleDriveFile) => {
    if (file.category === 'form') {
      return `https://docs.google.com/forms/d/${file.id}/viewform?embedded=true`;
    } else if (file.category === 'document') {
      return `https://docs.google.com/document/d/${file.id}/edit?usp=sharing&embedded=true`;
    } else if (file.category === 'spreadsheet') {
      return `https://docs.google.com/spreadsheets/d/${file.id}/edit?usp=sharing&embedded=true`;
    }
    return file.webViewLink;
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm animate-pulse">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-center py-8`}>
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* File List */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents & Forms</h3>
          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.id}
                className={`flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border-2 ${
                  selectedFile?.id === file.id ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedFile(file)}
              >
                <div className="flex-shrink-0">
                  {getFileIcon(file.mimeType, file.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{file.name}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{file.description}</p>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                    <span>{getFileTypeLabel(file.category)}</span>
                    <span>•</span>
                    <span>Modified {new Date(file.modifiedTime).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-2">
                  <a
                    href={file.webViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-blue-600 rounded"
                    title="Open in Google Drive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {file.webContentLink && (
                    <a
                      href={file.webContentLink}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-400 hover:text-green-600 rounded"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* File Preview/Embed */}
        {showEmbeds && selectedFile && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
              <a
                href={selectedFile.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in {getFileTypeLabel(selectedFile.category)}</span>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-96">
                <iframe
                  src={getEmbedUrl(selectedFile)}
                  className="w-full h-full"
                  title={selectedFile.name}
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="https://forms.google.com/legacy-jja-registration"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Users className="w-5 h-5" />
          <span>Register for Classes</span>
        </a>

        <a
          href="https://forms.google.com/legacy-jja-private-lessons"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Private Lesson</span>
        </a>

        <a
          href="https://docs.google.com/spreadsheets/legacy-jja-pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <DollarSign className="w-5 h-5" />
          <span>View Pricing</span>
        </a>
      </div>

      {/* Integration Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Google Drive Integration</h4>
        <p className="text-gray-700 text-sm">
          Documents, forms, and files are automatically synced from your Google Drive folder.
          To set up: Share your Google Drive folder publicly and enable the{' '}
          <a
            href="https://console.developers.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Google Drive API
          </a>
          .
        </p>
      </div>
    </div>
  );
}
