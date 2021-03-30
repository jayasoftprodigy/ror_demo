
class Swagger::Docs::Config
  def self.transform_path(path, api_version)
    # Make a distinction between the APIs and API documentation paths.
    "#{path}"
  end
end

Swagger::Docs::Config.base_api_controller = ActionController::API

Swagger::Docs::Config.register_apis({
  '1.0' => {
    controller_base_path: '',
    api_file_path: 'public/',
    base_path: 'http://localhost:3000',
    # base_path: 'http://112.196.97.230:3010',
    # base_path: 'https://app.telora.com.au',
    parent_controller: ActionController::API,
    clean_directory: true
  }
})
